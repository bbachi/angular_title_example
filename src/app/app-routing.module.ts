import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: MyprofileComponent, data: {title: 'Profile'} },
  { path: 'myaccount', component: MyaccountComponent, data: {title: 'My Account'} },
  { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} },
  { path: 'users',  loadChildren: './users/users.module#UsersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
