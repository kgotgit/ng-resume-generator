import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CoursesComponent } from './courses/courses.component';
import { PortfolioLinksComponent } from './portfolio-links/portfolio-links.component';
import { SummaryComponent } from './summary/summary.component';
import { MaterialModule } from '../material/material.module';
import { ResumeGeneratorRoutingModule } from './resume-generator-routing.module';
import { StepperWflComponent } from './stepper-wfl/stepper-wfl.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperienceItemComponent } from './experience/experience-item/experience-item.component';
import { DynaFacadeService } from '../core/services/dyna-facade.service';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [ProfileComponent, 
                SkillsComponent, 
                ExperienceComponent, 
                EducationComponent, 
                CoursesComponent, 
                PortfolioLinksComponent, 
                SummaryComponent, StepperWflComponent, ExperienceItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
  ],
  exports: [
    ProfileComponent, 
    SkillsComponent, 
    ExperienceComponent, 
    EducationComponent,
    CoursesComponent, 
    PortfolioLinksComponent, 
    SummaryComponent,
    ExperienceItemComponent,
    StepperWflComponent],
    entryComponents: [
      ExperienceItemComponent
    ],
    providers:[DynaFacadeService],
})
export class ResumeGeneratorModule { }
