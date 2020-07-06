import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { Student } from '../student';
import { TeacherService } from '../teacher.service';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateteachstu',
  templateUrl: './updateteachstu.component.html',
  styleUrls: ['./updateteachstu.component.css']
})
export class UpdateteachstuComponent implements OnInit {
  public T:Teacher;
  public teacher:Teacher[];
  public student: Student;
  public studentList: Student[];

  constructor(private service:TeacherService,private service1:StudentService,private route:Router) { 
    this.T=new Teacher();
    this.student = new Student();
    }
  
  public updatestuTeacher(){ 
    this.mergeStudents();


  
    return this.service.updatestuTeacher(this.T).subscribe(
      data=>{this.T=new Teacher();this.student=new Student();
      //this.route.navigate(['/classlist'])
    }
    );
  }

  mergeStudents(){
    var merge = this.teacher.filter(data=>{
        return data.teacherId == this.T.teacherId
    });
    console.log(merge[0].studentList);
       this.T.studentList=merge[0].studentList;
    if(this.student.studentId && this.student.studentName){           
        console.log(merge[0].studentList);
        merge[0].studentList.push(this.student)
        this.T.studentList=merge[0].studentList;
    }
}


  ngOnInit() {
    this.service.getAllTeacher().subscribe(data=>{
      this.teacher=data;
      //console.log(this.class);
      
    });
  }

}