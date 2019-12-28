import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ResumeGeneratorRoutingModule } from './resume-generator/resume-generator-routing.module';
import { ResumeGeneratorModule } from './resume-generator/resume-generator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule,
    ResumeGeneratorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
