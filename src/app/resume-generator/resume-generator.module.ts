import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CoursesComponent } from './courses/courses.component';
import { PortfolioLinksComponent } from './portfolio-links/portfolio-links.component';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [ProfileComponent, SkillsComponent, ExperienceComponent, EducationComponent, CoursesComponent, PortfolioLinksComponent, SummaryComponent],
  imports: [
    CommonModule
  ]
})
export class ResumeGeneratorModule { }
