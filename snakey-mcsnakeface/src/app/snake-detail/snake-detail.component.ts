import { Component, OnInit, Input } from '@angular/core';
import {Snake} from "../snake";
import {SNAKES} from "../snakes";

@Component({
  selector: 'app-snake-detail',
  templateUrl: './snake-detail.component.html',
  styleUrls: ['./snake-detail.component.css']
})
export class SnakeDetailComponent implements OnInit {

  @Input() snake: Snake | undefined = SNAKES[0];

  constructor() { }

  ngOnInit(): void {
  }
}
