import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatesubject',
  templateUrl: './updatesubject.component.html',
  styleUrls: ['./updatesubject.component.css']
})
export class UpdatesubjectComponent implements OnInit {
  private subjects:Subject[]=[];
  private id:number;
  private subject: Subject;
 

  constructor(private service:SubjectService, private route:Router) { 

    this.subject=new Subject();
  }



  public getSubjectsById(){
    this.subjects=[];
    this.service.getSubjectsById(this.id).subscribe(
    data=>{
      this.subject=data;
      this.subjects.push(this.subject);
    }
   );}

  public updateSubject(){
    
    return this.service.updateSubject(this.subject).subscribe(
      data=>{this.subject= new Subject();
        this.route.navigate(['/SubjectList'])


      }
    )
  }

  ngOnInit() {
    this.service.getAllSubjects().subscribe(data=>{
      this.subjects=data;
    });
  }

}
