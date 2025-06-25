// Define and export the Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Define and export the Directors interface that extends Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Define and export the interface for printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define and export the printTeacher function
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of Teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example usage of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Example usage of printTeacher function
console.log(printTeacher("John", "Doe")); // Should print: J. Doe