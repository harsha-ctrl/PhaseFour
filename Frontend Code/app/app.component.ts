import { Component } from '@angular/core';
import { ValidateloginComponent } from './validatelogin/validatelogin.component';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Academy';

  user:Login;
  private users:Login[]=[];

  isValidUser: boolean = false;
  admin:boolean=false;

  constructor(public service:LoginService,public router:Router) {
   // super(service,router);
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
   isShowDiv = false;
   toggleDisplayDivIf() {
     this.isShowDivIf = !this.isShowDivIf;
this.isShowDiv= true;
   }
 
  
   hidemenu() {
     this.isShowDiv = !this.isShowDiv;
   }
 
  
  /*public a(){
  document.getElementById("a1");
    }*/
}
