import { Component, computed, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForwardViewComponent } from './forward-view/forward-view.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'forward-view', component: ForwardViewComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
