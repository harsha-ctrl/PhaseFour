import { Component, OnInit } from '@angular/core';
import { ValidateloginComponent } from '../validatelogin/validatelogin.component';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent  extends ValidateloginComponent implements OnInit{

  admin:boolean=false;
  constructor(public service:LoginService,public router:Router) {
    super(service,router);
   // super.ngOnInit();
  }

  ngOnInit() {
  //super.validateLogin();
  console.log(super.admin);
  this.admin=super.admin;
  console.log(this.admin);
  }


}

