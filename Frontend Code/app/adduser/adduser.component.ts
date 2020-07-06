import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { Registration } from '../registration';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 private user: Registration;
  constructor(private service:RegistrationService,private router:Router) { 
 this.user=new Registration();
  }


  createRegistration(){
    console.log(this.user);
    this.service.createRegistration(this.user).subscribe(data=>{
      this.user=new Registration();
      console.log(this.user);
      if(Object.keys(this.user).length===0)
              {document.getElementById("t1").innerHTML="Registration failed as username or email is not unique"}
              else 
              {document.getElementById("t1").innerHTML="Registration Successful"}

    })
  }

  ngOnInit() {
  }

}
