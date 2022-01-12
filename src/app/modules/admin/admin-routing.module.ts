import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MemberContainerComponent } from './containers/member-container/member-container.component';
import { StudentGroupContainerComponent } from './containers/student-group-container/student-group-container.component';
import { ClassPlanificationContainerComponent } from './containers/class-planification-container/class-planification-container.component';
import { ClassScheduleContainerComponent } from './containers/class-schedule-container/class-schedule-container.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminPageComponent,
    children: [
      { path: 'members', component: MemberContainerComponent },
      { path: 'student-groups', component: StudentGroupContainerComponent },
      { path: 'class-planning', component: ClassPlanificationContainerComponent },
      { path: 'class-schedule', component: ClassScheduleContainerComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
