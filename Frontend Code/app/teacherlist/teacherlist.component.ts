import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {
 private teacher:Teacher[];
  constructor(private service:TeacherService) { }

  ngOnInit() {
    this.service.getAllTeacher().subscribe(data=>{
      this.teacher=data;
      console.log(this.teacher);
    });
  }

}
