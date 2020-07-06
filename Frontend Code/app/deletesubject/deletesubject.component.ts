import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletesubject',
  templateUrl: './deletesubject.component.html',
  styleUrls: ['./deletesubject.component.css']
})
export class DeletesubjectComponent implements OnInit {

  private subjects:Subject[];//=[];
  private subject:Subject;
  private id:number;
  constructor(private service:SubjectService, private router:Router) { }

  public deleteSubject(){

    return this.service.deleteSubject(this.id).subscribe(
      data=>{
        this.subject=data;
        this.subjects.pop;
        this.router.navigate(['/SubjectList'])
      }
    )

  }

  ngOnInit() {
    this.service.getAllSubjects().subscribe(data=>{
      this.subjects=data;
    });
  }

}
