import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
 private teacher:Teacher;
  constructor(private service:TeacherService,private router:Router) { this.teacher=new Teacher() }

  ngOnInit() {
  }

createTeacher(){
  this.service.createclass(this.teacher).subscribe(data=>{
    this.teacher=new Teacher();
    this.router.navigate(['/teacherlist'])
 })
}

}
