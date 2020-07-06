import { Component, OnInit } from '@angular/core';
import { Classes } from '../classes';
import { Subject } from '../subject';
import { ClassesService } from '../classes.service';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateclasssub',
  templateUrl: './updateclasssub.component.html',
  styleUrls: ['./updateclasssub.component.css']
})
export class UpdateclasssubComponent implements OnInit {

  public C:Classes;
  public class:Classes[];
  public subject: Subject;
  public subjectList: Subject[];




  constructor(private service:ClassesService,private service1:SubjectService,private route:Router) { 
    this.C=new Classes();
    this.subject = new Subject();
    }
  
  public updatesubClass(){ 
    this.mergeStudents();


  
    return this.service.updatesubClass(this.C).subscribe(
      data=>{this.C=new Classes();this.subject=new Subject();
      //this.route.navigate(['/classlist'])
    }
    );
  }

  mergeStudents(){
    var merge = this.class.filter(data=>{
        return data.classId == this.C.classId
    });
    console.log(merge[0].students);
       this.C.students=merge[0].students;
    if(this.subject.subjectId && this.subject.subjectName){           
        console.log(merge[0].subjectList);
        merge[0].subjectList.push(this.subject)
        this.C.subjectList=merge[0].subjectList;
    }
}


  ngOnInit() {
    this.service.getAllClass().subscribe(data=>{
      this.class=data;
      //console.log(this.class);
      
    });
  }

}
