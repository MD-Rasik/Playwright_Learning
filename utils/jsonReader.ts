import * as fs from 'fs';
import * as path from 'path';

export function getJSONTestData(fileName:string): any{
     
    try {
        const filePath = path.resolve(
            __dirname,
            '../data',
            fileName
        );

        const rawData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(rawData);

    } catch (error) {
        throw new Error(
          `Unable to read file: ${fileName}`
        );
    }
}
