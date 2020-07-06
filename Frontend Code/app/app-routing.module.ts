import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { StudentbyidComponent } from './studentbyid/studentbyid.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { AddclassComponent } from './addclass/addclass.component';
import { ClassbyidComponent } from './classbyid/classbyid.component';
import { UpdateclassComponent } from './updateclass/updateclass.component';
import { UpdatestuclassComponent} from './updatestuclass/updatestuclass.component';
import { DeleteclassComponent } from './deleteclass/deleteclass.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { TeacherbyidComponent } from './teacherbyid/teacherbyid.component';
import { UpdateteacherComponent } from './updateteacher/updateteacher.component';
import { DeleteteacherComponent } from './deleteteacher/deleteteacher.component';
import { StuteachlistComponent } from './stuteachlist/stuteachlist.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { UpdatesubjectComponent } from './updatesubject/updatesubject.component';
import { SubjectbyidComponent } from './subjectbyid/subjectbyid.component';
import { DeletesubjectComponent } from './deletesubject/deletesubject.component';
import { TeachsublistComponent } from './teachsublist/teachsublist.component';
import { ClasssublistComponent } from './classsublist/classsublist.component';
import { GetalluserComponent } from './getalluser/getalluser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ValidateloginComponent } from './validatelogin/validatelogin.component';
import { UserviewComponent } from './userview/userview.component';
import { UpdateteachstuComponent } from './updateteachstu/updateteachstu.component';
import { UpdateteachsubComponent } from './updateteachsub/updateteachsub.component';
import { UpdateclasssubComponent } from './updateclasssub/updateclasssub.component';





const routes: Routes = [
  {path:"addStudent",component:AddstudentComponent},
  {path:"updateStudent",component:UpdatestudentComponent},
  {path:"deleteStudent",component:DeletestudentComponent},
  {path:"searchStudent",component:StudentbyidComponent},
  {path:"StudentList",component:StudentlistComponent},
  {path:"classlist",component:ClasslistComponent},
  {path:"addclass",component:AddclassComponent},
  {path:"searchClass",component:ClassbyidComponent},
  {path:"updateClass",component:UpdateclassComponent},
  {path:"updatestuClass",component:UpdatestuclassComponent},
  {path:"deleteclass",component:DeleteclassComponent},
  {path:"teacherlist",component:TeacherlistComponent},
  {path:"addTeacher",component:AddteacherComponent},
  {path:"searchTeacher",component:TeacherbyidComponent},
  {path:"updateTeacher",component:UpdateteacherComponent},
  {path:"deleteTeacher",component:DeleteteacherComponent},
  {path:"stuteachlist",component:StuteachlistComponent},
  {path:"SubjectList",component:SubjectlistComponent},
  {path:"addSubject",component:AddsubjectComponent},
  {path:"searchSubject",component:SubjectbyidComponent},
  {path:"deleteSubject",component:DeletesubjectComponent},
  {path:"updateSubject",component:UpdatesubjectComponent},
  {path:"teacherSubject",component:TeachsublistComponent},
  {path:"subjectClass",component:ClasssublistComponent},
  {path:"userList",component:GetalluserComponent},
  {path:"adduser",component:AdduserComponent},
  {path:"deleteUser",component:DeleteuserComponent},
  {path:"login",component:ValidateloginComponent},
  {path:"userview",component:UserviewComponent},
  {path:"updatestuTeacher", component:UpdateteachstuComponent},
  {path:"updatesubTeacher", component: UpdateteachsubComponent},
  {path:"updatesubClass", component : UpdateclasssubComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
