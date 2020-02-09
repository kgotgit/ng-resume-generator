import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { DynaEleDirective } from 'src/app/core/directives/dyna-ele.directive';
import { DynaFacadeService } from 'src/app/core/services/dyna-facade.service';
import { ExperienceItemComponent } from './experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @ViewChild(DynaEleDirective,{static:true}) appDynaEle:DynaEleDirective;
  
  @ViewChildren(ExperienceItemComponent) experienceItems:QueryList<ExperienceItemComponent>;
  constructor(private dynaEleService:DynaFacadeService) { }

  ngOnInit() {
  }


  addExperience($event){

    this.dynaEleService.appendComponent(this.appDynaEle,ExperienceItemComponent,false);

  }
}
