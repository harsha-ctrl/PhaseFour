import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-stuteachlist',
  templateUrl: './stuteachlist.component.html',
  styleUrls: ['./stuteachlist.component.css']
})
export class StuteachlistComponent implements OnInit {
  private teacher:Teacher[];
  private studentList:Student[];
  constructor(private service:TeacherService,private stuservice:StudentService) { }
 
  public studetatils(){
    this.stuservice.getAllStudents().subscribe(data=>{
      this.studentList=data;
    });
   }
  
  ngOnInit() {
    this.service.getAllTeacher().subscribe(data=>{
      this.teacher=data;console.log(this.teacher);
    }
    )
  }
  }

