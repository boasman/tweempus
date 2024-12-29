import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweempuesTwinpListComponent } from './tweempues-twinp-list.component';

describe('TweempuesTwinpListComponent', () => {
  let component: TweempuesTwinpListComponent;
  let fixture: ComponentFixture<TweempuesTwinpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweempuesTwinpListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweempuesTwinpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
