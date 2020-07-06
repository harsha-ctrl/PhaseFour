import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentbyid',
  templateUrl: './studentbyid.component.html',
  styleUrls: ['./studentbyid.component.css']
})
export class StudentbyidComponent implements OnInit {
 private students:Student[]=[];
 private id:number;
 private student: Student;
  constructor(private service:StudentService) { }

 public getStudentsById(){
 this.students=[];
 this.service.getStudentsById(this.id).subscribe(
 data=>{
   this.student=data;
   this.students.push(this.student);
 }
);}

  ngOnInit() {
      }

}
