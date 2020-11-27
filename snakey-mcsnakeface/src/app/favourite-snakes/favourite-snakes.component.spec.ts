import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteSnakesComponent } from './favourite-snakes.component';

describe('FavouriteSnakesComponent', () => {
  let component: FavouriteSnakesComponent;
  let fixture: ComponentFixture<FavouriteSnakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteSnakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteSnakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
