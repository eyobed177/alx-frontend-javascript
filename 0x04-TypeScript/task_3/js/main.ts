import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Create newRowID with type RowID by calling insertRow
const newRowID: RowID = CRUD.insertRow(row);

// Create updatedRow with type RowElement including age field
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// Call updateRow and deleteRow functions
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);