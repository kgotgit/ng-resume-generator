import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit,OnDestroy {
 
  _formGroup:FormGroup;
  _workHere:boolean=false;
  constructor(protected ref: ChangeDetectorRef, private fb:FormBuilder) { }

  ngOnInit() {
    this._formGroup=this.fb.group({
      employer: ['', Validators.required],
      client:[''],
      role:['',Validators.required],
      workHere:[false],
      from:['',Validators.required],
      to:['',Validators.required]
    });
  
  }


  ngOnDestroy(): void {
  
  }
}
