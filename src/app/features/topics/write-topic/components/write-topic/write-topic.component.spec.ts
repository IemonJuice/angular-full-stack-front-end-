import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteTopicComponent } from './write-topic.component';

describe('WriteTopicComponent', () => {
  let component: WriteTopicComponent;
  let fixture: ComponentFixture<WriteTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteTopicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
