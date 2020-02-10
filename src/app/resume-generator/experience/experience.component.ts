import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef, AfterViewInit, ComponentRef, OnDestroy } from '@angular/core';
import { DynaEleDirective } from 'src/app/core/directives/dyna-ele.directive';
import { DynaFacadeService } from 'src/app/core/services/dyna-facade.service';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit,OnDestroy {
 


  @ViewChild(DynaEleDirective, { static: true }) appDynaEle: DynaEleDirective;
  alist: ExperienceItemComponent[] = new Array() as ExperienceItemComponent[];
  compRefMap: Map<number, ComponentRef<ExperienceItemComponent>> = new Map<number, ComponentRef<ExperienceItemComponent>>();
  _exItemCounter: number = 0;
  _destroy$=new Subject();
  constructor(private dynaEleService: DynaFacadeService, private ref: ChangeDetectorRef) { }

  ngOnInit() {

    this.addExperience(null);
  }


  addExperience($event) {
    let componentRef: ComponentRef<ExperienceItemComponent> = this.dynaEleService.appendComponent(this.appDynaEle, ExperienceItemComponent, false);
    componentRef.instance.id = ++this._exItemCounter;
    componentRef.instance.deleteItem.pipe(
      takeUntil(this._destroy$)
    ).subscribe((id:number)=>{
      this.deleteExperience(id);
    })
    this.compRefMap.set(componentRef.instance.id, componentRef);

  }

  deleteExperience(id:number) {
    if(this.compRefMap.size>1){
      let comp:ComponentRef<ExperienceItemComponent>=this.compRefMap.get(id);
      if(comp!=null){
        comp.destroy();
      }
    }
  }

  ngAfterViewInit(): void {
   
  }

  ngOnDestroy(): void {
    
    this._destroy$.next();
    this._destroy$.complete();
  }
}
