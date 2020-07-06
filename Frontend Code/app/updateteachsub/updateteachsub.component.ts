import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Subject } from '../subject';
import { Router } from '@angular/router';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-updateteachsub',
  templateUrl: './updateteachsub.component.html',
  styleUrls: ['./updateteachsub.component.css']
})
export class UpdateteachsubComponent implements OnInit {

  public T:Teacher;
  public teacher:Teacher[];
  public subject: Subject;
  public subjectList: Subject[];

  constructor(private service:TeacherService,private service1:SubjectService,private route:Router) { 
    this.T=new Teacher();
    this.subject = new Subject();
    }
  
  public updatesubTeacher(){ 
    this.mergeStudents();


  
    return this.service.updatesubTeacher(this.T).subscribe(
      data=>{this.T=new Teacher();this.subject=new Subject();
      //this.route.navigate(['/classlist'])
    }
    );
  }

  mergeStudents(){
    var merge = this.teacher.filter(data=>{
        return data.teacherId == this.T.teacherId
    });
    console.log(merge[0].subjectList);
       this.T.subjectList=merge[0].subjectList;
    if(this.subject.subjectId && this.subject.subjectName){           
        console.log(merge[0].subjectList);
        merge[0].subjectList.push(this.subject)
        this.T.subjectList=merge[0].subjectList;
    }
}


  ngOnInit() {
    this.service.getAllTeacher().subscribe(data=>{
      this.teacher=data;
      //console.log(this.class);
      
    });
  }

}