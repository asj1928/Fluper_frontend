import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { PagesModule } from './pages/pages.module';
import { PagesComponent } from './pages/pages.component';
// /home/ajay/Desktop/Flupper/frontend/src/app/pages/pages.module.ts
const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'pages', component: PagesComponent, children: [
      { path: '', loadChildren: () => PagesModule }
    ], canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
