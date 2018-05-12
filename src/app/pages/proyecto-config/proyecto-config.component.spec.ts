import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoConfigComponent } from './proyecto-config.component';

describe('ProyectoConfigComponent', () => {
  let component: ProyectoConfigComponent;
  let fixture: ComponentFixture<ProyectoConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
