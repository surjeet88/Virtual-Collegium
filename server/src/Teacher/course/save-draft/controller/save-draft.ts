import { Response, Request, NextFunction } from 'express';

import saveDraftService from '../service/save-draft';
import extractFilePaths from '../../../../utils/multer-file-utils';
import { fileInfo } from '../../../../types';


async function saveDraft(req: Request, res: Response, next: NextFunction) {
    try {
        const filePaths = extractFilePaths(req.files as fileInfo);
        const RESPONSE = await saveDraftService(req.body, filePaths);

        res.status(201).json(RESPONSE);
    } catch (error) {
        next(error);
    }
}

export default saveDraft;