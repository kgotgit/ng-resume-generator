import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './resume-generator/profile/profile.component';
import { SkillsComponent } from './resume-generator/skills/skills.component';
import { EducationComponent } from './resume-generator/education/education.component';
import { ExperienceComponent } from './resume-generator/experience/experience.component';
import { CoursesComponent } from './resume-generator/courses/courses.component';
import { SummaryComponent } from './resume-generator/summary/summary.component';
import { PortfolioLinksComponent } from './resume-generator/portfolio-links/portfolio-links.component';
import { StepperWflComponent } from './resume-generator/stepper-wfl/stepper-wfl.component';

const routes: Routes = [

    {
        path:'',
        redirectTo:'stepper',
        pathMatch:'full'
    },

    {
        path:'stepper',
        component:StepperWflComponent,
    },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 