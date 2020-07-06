import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes.service';
import { Router } from '@angular/router';
import {Classes} from '../classes'
import { ClassbyidComponent } from '../classbyid/classbyid.component';

@Component({
  selector: 'app-updateclass',
  templateUrl: './updateclass.component.html',
  styleUrls: ['./updateclass.component.css']
})
export class UpdateclassComponent implements OnInit {
  private C:Classes;
  private class:Classes[]=[];
  constructor(private service:ClassesService,private route:Router) { 
    this.C=new Classes();
  }

  public updateClass(){
    return this.service.updateClass(this.C).subscribe(
      data=>{this.C=new Classes();
      this.route.navigate(['/classlist'])}
    )
  }
  ngOnInit() {
    this.service.getAllClass().subscribe(data=>{
      this.class=data;
    });
  }


}
