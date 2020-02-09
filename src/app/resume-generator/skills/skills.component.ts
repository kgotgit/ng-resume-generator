import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Output() formGroupEmitter=new EventEmitter<FormGroup>();
  @Input() firstFormGroup: FormGroup;
  _skills:string[];
 
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      skill: [''],
      skills:['']
   
    });
    
  }

  addSkill($event){
    if($event.which===13){//keydown
     if(!Array.isArray(this._skills)){
      this._skills=new Array() as string[];
      
     }
     this._skills.push(this.firstFormGroup.controls.skill.value);
     this.firstFormGroup.controls.skill.setValue("");
    }
  }

}
