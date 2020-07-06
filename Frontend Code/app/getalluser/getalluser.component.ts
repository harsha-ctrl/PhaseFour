import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Registration } from '../registration';

@Component({
  selector: 'app-getalluser',
  templateUrl: './getalluser.component.html',
  styleUrls: ['./getalluser.component.css']
})
export class GetalluserComponent implements OnInit {
 private users:Registration[];
  constructor(private service:RegistrationService) { }

  ngOnInit() {
    this.service.getAllUser().subscribe(data=>{
      this.users=data;
      console.log(this.users);
    });
    
  }

}
