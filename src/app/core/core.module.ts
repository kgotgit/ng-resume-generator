import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MaterialModule } from '../material/material.module';
import { DynaEleDirective } from './directives/dyna-ele.directive';
import { DynaFacadeService } from './services/dyna-facade.service';



@NgModule({
  declarations: [TopMenuComponent, DynaEleDirective],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[TopMenuComponent,DynaEleDirective],
  providers:[DynaFacadeService]
})
export class CoreModule { }
