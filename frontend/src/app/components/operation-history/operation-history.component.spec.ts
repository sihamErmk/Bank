import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationHistoryComponent } from './operation-history.component';

describe('OperationHistoryComponent', () => {
  let component: OperationHistoryComponent;
  let fixture: ComponentFixture<OperationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
