import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    MyprofileComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
