import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { LiDashboardComponent } from './li-dashboard/li-dashboard.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: NavigatorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: LiDashboardComponent},
  {path: 'item-form', component: ItemFormComponent},
  {path: 'support', component: SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
      )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
