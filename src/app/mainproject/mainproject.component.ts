import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-mainproject',
  standalone: true,
  imports: [NavbarComponent,MainComponent,PortfolioComponent,AboutComponent,BlogComponent,ContactComponent],
  templateUrl: './mainproject.component.html',
  styleUrl: './mainproject.component.css'
})
export class MainprojectComponent {

}
