import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteteacher',
  templateUrl: './deleteteacher.component.html',
  styleUrls: ['./deleteteacher.component.css']
})
export class DeleteteacherComponent implements OnInit {

  private teacher:Teacher[]=[];
  private t:Teacher;
  private id:number;

  constructor(private service:TeacherService,private router:Router) { }

  public deleteTeacher(){
    return this.service.deleteTeacher(this.id).subscribe(
      data=>{
        this.t=data;
        this.teacher.pop;
        this.router.navigate(['/teacherlist'])

      }
    )
  }
  ngOnInit() {
  }

}
