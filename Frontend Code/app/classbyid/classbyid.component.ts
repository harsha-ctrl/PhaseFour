import { Component, OnInit } from '@angular/core';
 import {ClassesService} from '../classes.service'
import { Classes } from '../classes';
@Component({
  selector: 'app-classbyid',
  templateUrl: './classbyid.component.html',
  styleUrls: ['./classbyid.component.css']
})
export class ClassbyidComponent implements OnInit {
 private classes:Classes[]=[];
 private id:number;
 private class: Classes;


  constructor(private service:ClassesService) { }

  public getClassById(){
    this.classes=[];
    this.service.getClassById(this.id).subscribe(
    data=>{
      this.class=data;
      this.classes.push(this.class);
    }
   );}

  ngOnInit() {
  }

}