import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, RouteReuseStrategy } from '@angular/router';
import { Login } from '../login';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-validatelogin',
  templateUrl: './validatelogin.component.html',
  styleUrls: ['./validatelogin.component.css']
})
export class ValidateloginComponent implements OnInit {
   user:Login;
  private users:Login[]=[];

  isValidUser: boolean = false;
  admin:boolean=false;

  constructor(public service:LoginService,public router:Router) {
    this.user=new Login();
   }


  validateLogin(form: NgForm){
    console.log(this.user);
    console.log(form);
    let requestBody = Object.assign({}, this.user);
    this.service.validateLogin(requestBody).subscribe(data=>{
      if(data){
        this.isValidUser=true;

        console.log(data.is_admin);
      
        if(data.is_admin==="true")
        {
          this.admin=true;
        }
      }
   
    })  
   }
   isShowDivIf = false;
  
   toggleDisplayDivIf() {
     this.isShowDivIf = !this.isShowDivIf;
   }
 
  
  onsuccesslogin() {

    this.router.navigate(['/userview'])
 /*    if(this.admin)
      this.router.navigate(['/classlist'])
      else 
      this.router.navigate(['/userview']) */

 }

  
      ngOnInit() {
  }

}  

