import { Weather } from './../interfaces/weather';
import { Component, OnInit, Input } from '@angular/core';
import {Hotel} from "../interfaces/hotel";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() hotel: Hotel;
  constructor() { }

  ngOnInit() {
  }

}
