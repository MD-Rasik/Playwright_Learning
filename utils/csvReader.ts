import {parse} from 'csv-parse/sync';
import * as fs from 'fs';
import * as path from 'path';

export function getCSVTestData(fileName:string): any{
    try {
        const filePath = path.resolve(
            __dirname,
            '../data/csvData',
            fileName
        );
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true
        });
        return records;
    } catch (error) {
        console.error(`Error reading CSV file ${fileName}:`, error);
        throw error;
    }
}
