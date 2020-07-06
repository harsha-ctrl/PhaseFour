import { Component, OnInit } from '@angular/core';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent  {
  private Class:Classes
  constructor(private service:ClassesService,private router:Router) { this.Class=new Classes() }

  

createClass(){
  console.log(this.Class);
  this.service.createclass(this.Class).subscribe(data=>{
    this.Class=new Classes();
    this.router.navigate(['/classlist'])
 })


}}