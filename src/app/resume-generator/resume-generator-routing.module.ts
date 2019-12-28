import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { CoursesComponent } from './courses/courses.component';

const routes:Routes=[
    {
        path:"",
        component:ProfileComponent,
        children:[
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
            }
        ]
    }
  
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ResumeGeneratorRoutingModule{

}

