import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isLinear = false;
  @Output() formGroupEmitter=new EventEmitter<FormGroup>();
  @Input() firstFormGroup: FormGroup;
 

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobile:['',Validators.required]
    }); 

    this.formGroupEmitter.emit(this.firstFormGroup);
   /*  this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    }); */
  }

}
