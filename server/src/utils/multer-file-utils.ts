import { fileInfo, extractedFilePaths } from '../types';


function extractFilePaths<T extends fileInfo>(files: T | undefined): extractedFilePaths | undefined{
  if (!files) {

    return;
  }

  const filePaths: extractedFilePaths = {};

  for (const key in files) {
    const fileArray = files[key];
    
    if (fileArray ) {

      filePaths[key] = fileArray.map(file => file.path);
    }
  }

  return filePaths;
}

export default extractFilePaths;