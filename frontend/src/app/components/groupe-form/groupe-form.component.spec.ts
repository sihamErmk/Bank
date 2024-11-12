import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeFormComponent } from './groupe-form.component';

describe('GroupeFormComponent', () => {
  let component: GroupeFormComponent;
  let fixture: ComponentFixture<GroupeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
