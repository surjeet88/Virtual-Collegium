import { NotFoundError } from '../../../../errors/custom-errors';
import { Body } from '../types';
import saveDraft from '../../../../models/course/save-draft-init';
import { extractedFilePaths } from '../../../../types';
import findUsersByEmails from '../models/user/find-user';

async function saveDraftService(body: Body, filePaths: extractedFilePaths | undefined) {
  const { teachers, modules, chapters, ...restOfBody } = body;

  const teachersArray = await findUsersByEmails(teachers);

  if (teachersArray.length !== teachers.length) {
    const foundEmails = teachersArray.map((teacher) => teacher.email);
    const missingEmails = teachers.filter((email) => !foundEmails.includes(email));

    throw new NotFoundError(`Users with emails ${missingEmails.join(', ')} not found`);
  }

  const COURSE_DATA = {
    restOfCourseData: restOfBody,
    files: filePaths,
    teachers: teachersArray,
    modules,
    chapters,
  };

  const COURSE = await saveDraft(COURSE_DATA);

  return COURSE;
}

export default saveDraftService;