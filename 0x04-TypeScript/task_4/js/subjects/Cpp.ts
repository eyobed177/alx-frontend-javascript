import Subject from './Subject';
import { Teacher } from './Teacher';

export interface CppTeacher extends Teacher {
  experienceTeachingC?: number;
}

export class Cpp extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

  getAvailableTeacher(): string {
    if (!('experienceTeachingC' in this.teacher) || (this.teacher as CppTeacher).experienceTeachingC === undefined) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
