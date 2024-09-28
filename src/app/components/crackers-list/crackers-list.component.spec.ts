import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrackersListComponent } from './crackers-list.component';

describe('CrackersListComponent', () => {
  let component: CrackersListComponent;
  let fixture: ComponentFixture<CrackersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrackersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrackersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
