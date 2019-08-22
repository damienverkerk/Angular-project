import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTextComponent } from './saved-text.component';

describe('SavedTextComponent', () => {
  let component: SavedTextComponent;
  let fixture: ComponentFixture<SavedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
