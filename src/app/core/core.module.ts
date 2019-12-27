import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TopMenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[TopMenuComponent]
})
export class CoreModule { }
