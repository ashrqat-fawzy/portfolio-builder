import { FormComponent } from './form/form.component';
import { NavbarComponent } from './mainproject/navbar/navbar.component';
// import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './mainproject/main/main.component';
import { AboutComponent } from './mainproject/about/about.component';
import { PortfolioComponent } from './mainproject/portfolio/portfolio.component';
import { BlogComponent } from './mainproject/blog/blog.component';
import { ContactComponent } from './mainproject/contact/contact.component';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from './mainproject/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,MainComponent,AboutComponent,PortfolioComponent,BlogComponent,ContactComponent,FormComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const navBar = document.getElementsByTagName("nav")[0];

    // Add scroll listener for navbar
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        this.renderer.addClass(navBar, 'navbar-scrolled');
      } else {
        this.renderer.removeClass(navBar, 'navbar-scrolled');
      }
    });

    // Projects filtering
    const cssProject = document.getElementById("css");
    const jsProject = document.getElementById("js");
    const bootstrapProject = document.getElementById("bootstrap");
    const teamProject = document.getElementById("team");

    const cssProjectsToShow = document.querySelectorAll(".css");
    const jsProjectsToShow = document.querySelectorAll(".js");
    const bootstrapProjectsToShow = document.querySelectorAll(".bootstrap");
    const teamProjectsToShow = document.querySelectorAll(".team");

    // Hide all projects
    const hideAllProjects = () => {
      cssProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'none'));
      jsProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'none'));
      bootstrapProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'none'));
      teamProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'none'));
    };

    // Event listeners for project filters
    cssProject?.addEventListener('click', () => {
      hideAllProjects();
      cssProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'flex'));
    });

    jsProject?.addEventListener('click', () => {
      hideAllProjects();
      jsProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'flex'));
    });

    bootstrapProject?.addEventListener('click', () => {
      hideAllProjects();
      bootstrapProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'flex'));
    });

    teamProject?.addEventListener('click', () => {
      hideAllProjects();
      teamProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'flex'));
    });

    document.getElementById("all")?.addEventListener('click', () => {
      hideAllProjects();
      cssProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'flex'));
      jsProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'flex'));
      bootstrapProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'flex'));
      teamProjectsToShow.forEach(project => this.renderer.setStyle(project, 'display', 'flex'));
    });
  }
}
