import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit,OnDestroy {
 

  constructor(protected ref: ChangeDetectorRef) { }

  ngOnInit() {

    this.ref.detectChanges();
  }


  ngOnDestroy(): void {
    this.ref
  }
}
