import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {bootstrap} from 'node_modules/bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { StudentbyidComponent } from './studentbyid/studentbyid.component';
import { FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { StudentService } from './student.service';
import { ClasslistComponent } from './classlist/classlist.component';
import { ClassesService } from './classes.service';
import { AddclassComponent } from './addclass/addclass.component';
import { ClassbyidComponent } from './classbyid/classbyid.component';
import { UpdateclassComponent } from './updateclass/updateclass.component';
import { UpdatestuclassComponent } from './updatestuclass/updatestuclass.component';
import { DeleteclassComponent } from './deleteclass/deleteclass.component';

import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { TeacherbyidComponent } from './teacherbyid/teacherbyid.component';
import { UpdateteacherComponent } from './updateteacher/updateteacher.component';
import { DeleteteacherComponent } from './deleteteacher/deleteteacher.component';
import { StuteachlistComponent } from './stuteachlist/stuteachlist.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { UpdatesubjectComponent } from './updatesubject/updatesubject.component';
import { SubjectbyidComponent } from './subjectbyid/subjectbyid.component';
import { DeletesubjectComponent } from './deletesubject/deletesubject.component';
import { TeachsublistComponent } from './teachsublist/teachsublist.component';
import { ClasssublistComponent } from './classsublist/classsublist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { GetalluserComponent } from './getalluser/getalluser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ValidateloginComponent } from './validatelogin/validatelogin.component';
import { UserviewComponent } from './userview/userview.component';
import { UpdateteachstuComponent } from './updateteachstu/updateteachstu.component';
import { UpdateteachsubComponent } from './updateteachsub/updateteachsub.component';
import { UpdateclasssubComponent } from './updateclasssub/updateclasssub.component';
@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    StudentlistComponent,
    DeletestudentComponent,
    UpdatestudentComponent,
    StudentbyidComponent,
    ClasslistComponent,
    AddclassComponent,
    ClassbyidComponent,
    UpdateclassComponent,
    UpdatestuclassComponent,
    DeleteclassComponent,
   
    TeacherlistComponent,
   
    AddteacherComponent,
   
    TeacherbyidComponent,
   
    UpdateteacherComponent,
   
    DeleteteacherComponent,
   
    StuteachlistComponent,
   
    AddsubjectComponent,
   
    SubjectlistComponent,
   
    UpdatesubjectComponent,
   
    SubjectbyidComponent,
   
    DeletesubjectComponent,
   
    TeachsublistComponent,
   
    ClasssublistComponent,
   
    AdduserComponent,
   
    GetalluserComponent,
   
    DeleteuserComponent,
   
    ValidateloginComponent,
   
    UserviewComponent,
   
    UpdateteachstuComponent,
   
    UpdateteachsubComponent,
   
    UpdateclasssubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService,ClassesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
