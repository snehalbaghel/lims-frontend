import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { LiDashboardComponent } from './li-dashboard/li-dashboard.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { ItemRequestsComponent } from './item-requests/item-requests.component';
import { ApproveRequestsComponent } from './approve-requests/approve-requests.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'user', component: NavigatorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: LiDashboardComponent},
  {path: 'item-form', component: ItemFormComponent},
  {path: 'request-form', component: RequestFormComponent},
  {path: 'requests', component: ItemRequestsComponent},
  {path: 'approve', component: ApproveRequestsComponent},
  {path: 'support', component: SupportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
      )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
