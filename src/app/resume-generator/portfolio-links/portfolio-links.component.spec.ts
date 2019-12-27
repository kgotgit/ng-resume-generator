import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLinksComponent } from './portfolio-links.component';

describe('PortfolioLinksComponent', () => {
  let component: PortfolioLinksComponent;
  let fixture: ComponentFixture<PortfolioLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
