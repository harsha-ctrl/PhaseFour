import { Component, OnInit } from '@angular/core';
import { TeacherService} from '../teacher.service'
import { Teacher } from '../teacher';
@Component({
  selector: 'app-teacherbyid',
  templateUrl: './teacherbyid.component.html',
  styleUrls: ['./teacherbyid.component.css']
})
export class TeacherbyidComponent implements OnInit {
  private teacher:Teacher[]=[];
  private t:Teacher;
  private id:number;
  constructor(private service:TeacherService ){ }


  public getTeacherById(){
    this.teacher=[];
    this.service.getTeacherById(this.id).subscribe(
    data=>{
      this.t=data;
      this.teacher.push(this.t);
    }
   );}
  ngOnInit() {
  }

}

