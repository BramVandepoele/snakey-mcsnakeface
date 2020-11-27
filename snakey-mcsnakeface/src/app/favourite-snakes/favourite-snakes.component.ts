import { Component, OnInit } from '@angular/core';
import {SNAKES} from "../snakes";
import {Snake} from "../snake";

@Component({
  selector: 'app-favourite-snakes',
  templateUrl: './favourite-snakes.component.html',
  styleUrls: ['./favourite-snakes.component.css']
})
export class FavouriteSnakesComponent implements OnInit {

  snakes = SNAKES;

  constructor() { }

  ngOnInit(): void {
  }

  selectedSnake: Snake | undefined;
  onSelect(snake: Snake): void {
    this.selectedSnake = snake;
  }
}
