import { Injectable, ComponentFactoryResolver, Type } from '@angular/core';
import { DynaEleDirective } from '../directives/dyna-ele.directive';

@Injectable({
  providedIn: 'root'
})
export class DynaFacadeService {

  constructor(
    private componentFactoryResolver:ComponentFactoryResolver
  ) { }

  public appendComponent(dynaEleRef:DynaEleDirective,component:Type<any>,clear:boolean=true):any{
    if(dynaEleRef==null || component==null){
      return null;
    }

    const componentFactory=this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef=dynaEleRef.viewContainerRef;
    if(clear){
      viewContainerRef.clear();
    }
    const componentRef=viewContainerRef.createComponent(componentFactory);
    return componentRef.instance;

  }
}
