import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'RegisterPatient',
    component: DashboardComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ]
  },
  {
    path:'',
    redirectTo : 'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component: HomeComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ]
  },
  {
    path:'registerPatient',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
