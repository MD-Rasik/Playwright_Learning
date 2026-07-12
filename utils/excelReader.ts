import * as ExcelJS from 'exceljs';


export async function getExcelData(filePath: string, sheetName: string){
    const data: any[][]= [];
    const workBook = new ExcelJS.Workbook();
    await workBook.xlsx.readFile(filePath);
    const workSheet = workBook.getWorksheet(sheetName);
    
    if (!workSheet) {
        throw new Error(`Sheet ${sheetName} not found in file ${filePath}`);
    }

    workSheet.eachRow((row: ExcelJS.Row, rowNumber: number) => {
        if (rowNumber === 1) return;
        const rowData: any[] = [];
        for(let col=1; col<=2; col++){
            const cell = row.getCell(col);
            rowData.push(cell.value?.toString() || '');
        }
        data.push(rowData);
    });

    return data;

}