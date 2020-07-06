import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.css']
})
export class UpdateteacherComponent implements OnInit {
 private t:Teacher;
 private teacher:Teacher[]=[];
  constructor(private service:TeacherService,private route:Router) { 
    this.t=new Teacher();  }

public updateTeacher(){
  return this.service.updateTeacher(this.t).subscribe(
    data=>{this.t=new Teacher();
    this.route.navigate(['/teacherlist'])}
  )
}

  ngOnInit() {
    this.service.getAllTeacher().subscribe(data=>{
      this.teacher=data;
    });
  }

}
