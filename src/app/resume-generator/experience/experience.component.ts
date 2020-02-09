import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef, AfterViewInit, ComponentRef } from '@angular/core';
import { DynaEleDirective } from 'src/app/core/directives/dyna-ele.directive';
import { DynaFacadeService } from 'src/app/core/services/dyna-facade.service';
import { ExperienceItemComponent } from './experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit,AfterViewInit {
  

  @ViewChild(DynaEleDirective,{static:true}) appDynaEle:DynaEleDirective;
  alist:ExperienceItemComponent[]=new Array() as ExperienceItemComponent[];
  
  @ViewChildren(ExperienceItemComponent,) experienceItems:QueryList<ExperienceItemComponent>;
  compRef:ComponentRef<ExperienceItemComponent>[]=[];
  constructor(private dynaEleService:DynaFacadeService,private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }


  addExperience($event){

    this.compRef.push(this.dynaEleService.appendComponent(this.appDynaEle,ExperienceItemComponent,false));
    
    

    
  }

  deleteExperiences($event){
    this.compRef.forEach((item:ComponentRef<ExperienceItemComponent>)=>{
      item.destroy();
    });
  }

  ngAfterViewInit(): void {
    this.experienceItems.changes.subscribe((changes)=>{
      console.log(changes);
    })
  }
}
