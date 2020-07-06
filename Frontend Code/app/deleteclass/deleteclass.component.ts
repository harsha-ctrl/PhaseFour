import { Component, OnInit } from '@angular/core';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteclass',
  templateUrl: './deleteclass.component.html',
  styleUrls: ['./deleteclass.component.css']
})
export class DeleteclassComponent implements OnInit {
 private c:Classes[]=[];
  private class:Classes;
  private id:number;
  
  constructor(private service:ClassesService,private router:Router) { }

   public deleteClass(){
    return this.service.deleteClass(this.id).subscribe(
      data=>{
        this.class=data;
        this.c.pop;
        this.router.navigate(['/classlist'])
      }
    )

   }
  ngOnInit() {
    this.service.getAllClass().subscribe(data=>{
      this.c=data;
      console.log(this.class);
    });
  }

}
