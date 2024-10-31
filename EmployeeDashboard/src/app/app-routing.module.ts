import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../dashboard/home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from '../dashboard/dashboard.module';

const routes: Routes = [
 {path:'',component: LoginComponent},
 {path:'webpage',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
