import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { ListusersComponent } from '../listusers/listusers.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, data: {title: 'User Profile'} },
  { path: 'myaccount', component: ListusersComponent, data: {title: 'List Users'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
