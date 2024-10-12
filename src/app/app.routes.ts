import { UserportfolioComponent } from './userportfolio/userportfolio.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainprojectComponent } from './mainproject/mainproject.component';

import { AboutComponent } from './mainproject/about/about.component';
import { BlogComponent } from './mainproject/blog/blog.component';
import { MainComponent } from './mainproject/main/main.component';
import { PortfolioComponent } from './mainproject/portfolio/portfolio.component';
import { ContactComponent } from './mainproject/contact/contact.component';

export const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'main', component: MainprojectComponent },
  { path: 'mainSec', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component:ContactComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'userportfolio', component: UserportfolioComponent },

];

