import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userportfolio',
  templateUrl: './userportfolio.component.html',
  styleUrls: ['./userportfolio.component.css','../styles/shared-styles.css'
]

})
export class UserportfolioComponent {


  formData: any = {};

  constructor(private route: ActivatedRoute) {
    // Fetch the form data from query parameters
    this.route.queryParams.subscribe(params => {
      this.formData = {
        username: params['username'] || '',
        email: params['email'] || '',
        phone: params['phone'] || '',
        notes: params['notes'] || '' ,
        education: params['education'] || '' ,
        img: params['img'] || '' ,
        resume: params['resume'] || '' ,
        linkedin: params['linkedin'] || '' ,
        github: params['github'] || '' ,
        facebook: params['facebook'] || '' ,
        instagram: params['instagram'] || '' ,


             // about user info
        titleWorkSkill1: params['titleWorkSkill1'] || '',
        titleWorkSkill2: params['titleWorkSkill2'] || '',
        titleWorkSkill3: params['titleWorkSkill3'] || '',
        titleWorkSkill4: params['titleWorkSkill4'] || '',

        descriptionWorkSkill1: params['descriptionWorkSkill1'] || '',
        descriptionWorkSkill2: params['descriptionWorkSkill2'] || '',
        descriptionWorkSkill3: params['descriptionWorkSkill3'] || '',
        descriptionWorkSkill4: params['descriptionWorkSkill4'] || '',

        trackSkill1: params['trackSkill1'] || '',
        trackSkill2: params['trackSkill2'] || '',
        trackSkill3: params['trackSkill3'] || '',
        trackSkill4: params['trackSkill4'] || '',

        // about projects

        projectImg1: params['projectImg1'] || '',
        projectTitle1: params['projectTitle1'] || '',
        projectTool1: params ['projectTool1'] || '',

        projectImg2: params['projectImg2'] || '',
        projectTitle2: params['projectTitle2'] || '',
        projectTool2: params ['projectTool2'] || '',

        projectImg3: params['projectImg3'] || '',
        projectTitle3: params['projectTitle3'] || '',
        projectTool3: params ['projectTool3'] || '',

        projectImg4: params['projectImg4'] || '',
        projectTitle4: params['projectTitle4'] || '',
        projectTool4: params ['projectTool4'] || '',

        projectImg5: params['projectImg5'] || '',
        projectTitle5: params['projectTitle5'] || '',
        projectTool5: params ['projectTool5'] || '',

        projectImg6: params['projectImg6'] || '',
        projectTitle6: params['projectTitle6'] || '',
        projectTool6: params ['projectTool6'] || '',

        projectImg7: params['projectImg7'] || '',
        projectTitle7: params['projectTitle7'] || '',
        projectTool7: params ['projectTool7'] || '',

        projectImg8: params['projectImg8'] || '',
        projectTitle8: params['projectTitle8'] || '',
        projectTool8: params ['projectTool8'] || '',


        // about blogs
        blog1: params['blog1'] || '' ,
        blog1img: params['blog1img'] || '',
        blog1title:params['blog1title'] || '',
        blog1description:params['blog1description'] || '',
        blog1date: params['blog1date'] || '',
        blog2: params['blog2'] || '' ,
        blog2img: params['blog2img'] || '',
        blog2title:params['blog2title'] || '',
        blog2description:params['blog2description'] || '',
        blog2date: params['blog2date'] || '',
        blog3: params['blog3'] || '' ,
        blog3img: params['blog3img'] || '',
        blog3title:params['blog3title'] || '',
        blog3description:params['blog3description'] || '',
        blog3date: params['blog3date'] || '',
        blog4: params['blog4'] || '' ,
        blog4img: params['blog4img'] || '',
        blog4title:params['blog4title'] || '',
        blog4description:params['blog4description'] || '',
        blog4date: params['blog4date'] || '',


      };

    });
  }
}
