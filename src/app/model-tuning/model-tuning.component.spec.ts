import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTuningComponent } from './model-tuning.component';

describe('ModelTuningComponent', () => {
  let component: ModelTuningComponent;
  let fixture: ComponentFixture<ModelTuningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelTuningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelTuningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
