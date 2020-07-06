import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Subject } from '../subject';
import { StudentService } from '../student.service';
import {SubjectService} from '../subject.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent  {
private student:Student;
private subjects:Subject[];
  constructor(private service:StudentService, private service1 : SubjectService, private router:Router) { 
    this.student=new Student();
    }

    createStudent(){
      console.log(this.student);
      this.service.createStudent(this.student).subscribe(data=>{
        this.student=new Student();
          this.router.navigate(['/StudentList'])
      })
    }

    ngOnInit() {
      this.service1.getAllSubjects().subscribe(data=>{
        this.subjects=data;
      });
    }
  

}