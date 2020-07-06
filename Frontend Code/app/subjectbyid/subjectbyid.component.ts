import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subjectbyid',
  templateUrl: './subjectbyid.component.html',
  styleUrls: ['./subjectbyid.component.css']
})
export class SubjectbyidComponent implements OnInit {
 private subjects:Subject[]=[];
 private id:number;
 private subject: Subject;
  constructor(private service:SubjectService) { }

 public getSubjectsById(){
 this.subjects=[];
 this.service.getSubjectsById(this.id).subscribe(
 data=>{
   this.subject=data;
   this.subjects.push(this.subject);
 }
);}

  ngOnInit() {
      }

}

