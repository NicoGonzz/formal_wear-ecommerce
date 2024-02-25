import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersiteComponent } from './usersite.component';

describe('UsersiteComponent', () => {
  let component: UsersiteComponent;
  let fixture: ComponentFixture<UsersiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
