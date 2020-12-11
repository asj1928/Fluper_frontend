import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'pages', component: PagesComponent, children: [
      { path: '', loadChildren: './pages/pages.module#PagesModule' }
    ]
    // ,canActivate:[AuthGuardService]
  },
  // {
  //   path: 'pages', component: PagesComponent, children: [
  //     { path: '', loadChildren: './pages/pages.module#PagesModule' }
  //   ],canActivate:[AuthGaurdService]
  // },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
