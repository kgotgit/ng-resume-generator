import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynaEle]'
})
export class DynaEleDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
