import { RowID, RowElement } from './interface';

// Ambient type declarations for crud.js functions
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

// Export the functions as a module
declare module 'crud' {
  export { insertRow, deleteRow, updateRow };
}