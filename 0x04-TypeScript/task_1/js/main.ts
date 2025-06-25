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

// Define and export the interface for StudentClass constructor
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define and export the interface for StudentClass
export interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Define and export the StudentClass
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

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

// Example usage of StudentClass
const student1: StudentClassInterface = new StudentClass("Jane", "Smith");
console.log(student1.displayName()); // Should print: Jane
console.log(student1.workOnHomework()); // Should print: Currently working