import * as XLSX from "xlsx";
import path from "path";
import { SHEETS } from "../constants/excel.constants";

const fileLocation = path.join(
    process.cwd(),
    "dataset",
    "RecsBase.xlsx"
);

const workbook = XLSX.readFile(fileLocation);

export function getTable<T>(sheetKey: keyof typeof SHEETS) {
    const sheetName = SHEETS[sheetKey];

    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(`Worksheet "${sheetName}" not found.`);
    }

    return XLSX.utils.sheet_to_json<T>(worksheet);
}
