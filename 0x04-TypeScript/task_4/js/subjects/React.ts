import Subject from './Subject';
import { Teacher } from './Teacher';

export interface ReactTeacher extends Teacher {
  experienceTeachingReact?: number;
}

export class React extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    if (!('experienceTeachingReact' in this.teacher) || (this.teacher as ReactTeacher).experienceTeachingReact === undefined) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
