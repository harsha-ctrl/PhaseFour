import { Component, OnInit } from '@angular/core';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';
import {StudentService} from '../student.service';
import {Student} from '../student';


@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {
 private class:Classes[];
 private students:Student[];
  constructor(private service:ClassesService,private stuservice:StudentService) { }

  public studetatils(){
  this.stuservice.getAllStudents().subscribe(data=>{
    this.students=data;
  });
 }


  ngOnInit() {
    this.service.getAllClass().subscribe(data=>{
      this.class=data;
      console.log(this.class);
    });
    
  }

}
