import { Profile } from './../interfaces/profile';
import { Component, OnInit, Input } from '@angular/core';
import {Hotel} from "../interfaces/hotel";
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [NgbRatingConfig]
})
export class ProfileComponent implements OnInit {
  @Input() hotel: Hotel;
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
  }

}
