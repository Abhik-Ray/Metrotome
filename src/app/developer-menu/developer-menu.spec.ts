import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperMenu } from './developer-menu';

describe('DeveloperMenu', () => {
  let component: DeveloperMenu;
  let fixture: ComponentFixture<DeveloperMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
