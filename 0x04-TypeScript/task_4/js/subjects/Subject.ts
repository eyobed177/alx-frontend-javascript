import { Teacher } from './Teacher';

export default class Subject {
  teacher: Teacher;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }
}
