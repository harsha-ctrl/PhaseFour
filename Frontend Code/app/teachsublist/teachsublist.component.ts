import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-stuteachlist',
  templateUrl: './teachsublist.component.html',
  styleUrls: ['./teachsublist.component.css']
})
export class TeachsublistComponent implements OnInit {
  private teacher:Teacher[];
  private subjectList:Subject[];
  constructor(private service:TeacherService,private stuservice:SubjectService) { }
 
  public subdetatils(){
    this.stuservice.getAllSubjects().subscribe(data=>{
      this.subjectList=data;
    });
   }
  
  ngOnInit() {
    this.service.getAllTeacher().subscribe(data=>{
      this.teacher=data;console.log(this.teacher);
    }
    )
  }
  }


