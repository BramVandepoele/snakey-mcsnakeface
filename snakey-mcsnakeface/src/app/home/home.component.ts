import { Component, OnInit } from '@angular/core';
import {Snake} from "../snake";
import {SNAKES} from "../snakes";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

topSnake: Snake = SNAKES[0];

  constructor() { }

  ngOnInit(): void {
  }

}
