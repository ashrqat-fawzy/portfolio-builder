import { UserportfolioComponent } from './userportfolio/userportfolio.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainprojectComponent } from './mainproject/mainproject.component';


export const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'main', component: MainprojectComponent },  // Ensure this is correct
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'userportfolio', component: UserportfolioComponent }
];

