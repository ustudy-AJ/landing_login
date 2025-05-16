import { Routes } from '@angular/router';
import LoginComponent from './components/login/login.component';

export const routes: Routes = [
  // {
  //   path: "",
  //   pathMatch: "full",
  //   redirectTo: "login"
  // },
  // {
  //   path: "",
  //   children: [
  //     {
  //       path: "login",
  //       loadComponent: ()=> import("./components/login/login.component")
  //     },
  //     {
  //       path: "statistic",
  //       loadComponent: ()=> import("./components/statistic/statistic.component")
  //     }
  //   ]
  // }
  {
    path: "",
    component: LoginComponent,
  },
];
