import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweempuesTwinpComponent } from './tweempues-twinp.component';

describe('TweempuesTwinpComponent', () => {
  let component: TweempuesTwinpComponent;
  let fixture: ComponentFixture<TweempuesTwinpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweempuesTwinpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweempuesTwinpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
