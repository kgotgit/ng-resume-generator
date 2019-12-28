import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './resume-generator/profile/profile.component';
import { SkillsComponent } from './resume-generator/skills/skills.component';
import { EducationComponent } from './resume-generator/education/education.component';
import { ExperienceComponent } from './resume-generator/experience/experience.component';
import { CoursesComponent } from './resume-generator/courses/courses.component';
import { SummaryComponent } from './resume-generator/summary/summary.component';
import { PortfolioLinksComponent } from './resume-generator/portfolio-links/portfolio-links.component';

const routes: Routes = [
   
    {
        path:'profile',
        component:ProfileComponent,
    },
    {
        path:'skills',  
        component:SkillsComponent,
    },
    {
        path:'education',
        component:EducationComponent,
    },
    {
        path:'experience',
        component:ExperienceComponent,
    },
    {
        path:'courses',
        component:CoursesComponent,
    },
    {
        path:'portfoliolinks',
        component:PortfolioLinksComponent,
    },
    {
        path:'summary',
        component:SummaryComponent,
    }
    /*{

       path:'resume',
        loadChildren:()=>import('./resume-generator/resume-generator.module').then(mod=>{console.log(mod);mod.ResumeGeneratorModule}) 

    }*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 