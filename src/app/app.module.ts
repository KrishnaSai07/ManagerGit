import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SkillComponent } from './component/skill/skill.component';
import { EmployeeDataComponent } from './component/employee-data/employee-data.component';
import { EmployeeRequestsComponent } from './component/employee-requests/employee-requests.component';
import { ApprovalComponent } from './component/approval/approval.component';
import { EmployeeSkillComponent } from './component/employee-skill/employee-skill.component';
import { RequirementComponent } from './component/requirement/requirement.component';
import { DisplayComponent } from './component/display/display.component';
import { RecommendationsComponent } from './component/recommendations/recommendations.component';
import { EmpCourseComponent } from './component/emp-course/emp-course.component';
import { ManagerRequestComponent } from './component/manager-request/manager-request.component';
import { HomeComponent } from './component/home/home.component';

const paths: Routes = [
  {path: 'skills', component: SkillComponent},
  {path: 'employeeRequest', component: EmployeeRequestsComponent},
  {path: 'approve/:id', component: ApprovalComponent},
  {path: 'employeeData', component: EmployeeDataComponent},
  {path: 'employeeSkill/:id', component: EmployeeSkillComponent},
  {path: 'requirement', component: RequirementComponent},
  {path: 'requirement/:id', component: DisplayComponent},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: 'empCourse/:id/:name', component: EmpCourseComponent},
  {path: 'managerRequest', component: ManagerRequestComponent},
  {path: '', component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    EmployeeDataComponent,
    EmployeeRequestsComponent,
    ApprovalComponent,
    EmployeeSkillComponent,
    RequirementComponent,
    DisplayComponent,
    RecommendationsComponent,
    EmpCourseComponent,
    ManagerRequestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
