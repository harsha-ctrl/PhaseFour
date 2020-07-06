import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Registration } from '../registration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  private users:Registration[];
  private user:Registration;
  private id: number;
  constructor(private service:RegistrationService,private router:Router) { }

  public deleteUser(){

    return this.service.deleteUser(this.id).subscribe(
      data=>{
        this.user=data;
        this.users.pop;
        this.router.navigate(['/userList'])
      }
    )

  }

  ngOnInit() {
    this.service.getAllUser().subscribe(data=>{
      this.users=data;
    });
  }

}
