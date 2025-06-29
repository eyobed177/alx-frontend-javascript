import Subject from './Subject';
import { Teacher } from './Teacher';

export interface JavaTeacher extends Teacher {
  experienceTeachingJava?: number;
}

export class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (!('experienceTeachingJava' in this.teacher) || (this.teacher as JavaTeacher).experienceTeachingJava === undefined) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
