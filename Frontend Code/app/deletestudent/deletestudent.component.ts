import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {

  private students:Student[];//=[];
  private student:Student;
  private id:number;
  constructor(private service:StudentService, private router:Router) { }

  public deleteStudent(){

    return this.service.deleteStudent(this.id).subscribe(
      data=>{
        this.student=data;
        this.students.pop;
        this.router.navigate(['/StudentList'])
      }
    )

  }

  ngOnInit() {
    this.service.getAllStudents().subscribe(data=>{
      this.students=data;
    });
  }

}
