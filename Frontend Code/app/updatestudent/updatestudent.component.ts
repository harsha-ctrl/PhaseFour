import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  private students:Student[]=[];
  private id:number;
  private student: Student;
 

  constructor(private service:StudentService, private route:Router) { 

    this.student=new Student();
  }



  public getStudentsById(){
    this.students=[];
    this.service.getStudentsById(this.id).subscribe(
    data=>{
      this.student=data;
      this.students.push(this.student);
    }
   );}

  public updateStudent(){
    
    return this.service.updateStudent(this.student).subscribe(
      data=>{this.student= new Student();
        this.route.navigate(['/StudentList'])


      }
    )
  }

  ngOnInit() {
    this.service.getAllStudents().subscribe(data=>{
      this.students=data;
    });
  }

}

