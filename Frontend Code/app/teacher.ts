import {Student} from './student';
import {Subject} from './subject';
export class Teacher {
    teacherId : number;
    name : string;
    address : string;
    contact : number;
    specialized : string;
    studentList : Student[];
    subjectList : Subject[];
}
