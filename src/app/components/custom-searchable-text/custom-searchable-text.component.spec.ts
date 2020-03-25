import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSearchableTextComponent } from './custom-searchable-text.component';

describe('CustomSearchableTextComponent', () => {
  let component: CustomSearchableTextComponent;
  let fixture: ComponentFixture<CustomSearchableTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSearchableTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSearchableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
