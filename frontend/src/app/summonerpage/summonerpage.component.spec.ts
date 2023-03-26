import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerpageComponent } from './summonerpage.component';

describe('SummonerpageComponent', () => {
  let component: SummonerpageComponent;
  let fixture: ComponentFixture<SummonerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummonerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
