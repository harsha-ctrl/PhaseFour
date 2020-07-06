import { Component, OnInit } from '@angular/core';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';
import { Router } from '@angular/router';
import {ClasslistComponent} from '../classlist/classlist.component';
import { Student } from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-updatestuclass',
  templateUrl: './updatestuclass.component.html',
  styleUrls: ['./updatestuclass.component.css']
})
export class UpdatestuclassComponent implements OnInit {
  public C:Classes;
  public class:Classes[];
  public student: Student;
  public students: Student[];
 /* classVar:any={ 
    classId:"",
    className:"",
    studentId:"",
    studentName:"",
    studentCourse:"",
    studentPhone:""} */



  constructor(private service:ClassesService,private service1:StudentService,private route:Router) { 
    this.C=new Classes();
    this.student = new Student();
    }
  
  public updatestuClass(){ 
    this.mergeStudents();


  
    return this.service.updatestuClass(this.C).subscribe(
      data=>{this.C=new Classes();this.student=new Student();
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
    if(this.student.studentId && this.student.studentName){           
        console.log(merge[0].students);
        merge[0].students.push(this.student)
        this.C.students=merge[0].students;
    }
}


  ngOnInit() {
    this.service.getAllClass().subscribe(data=>{
      this.class=data;
      //console.log(this.class);
      
    });
  }

}
