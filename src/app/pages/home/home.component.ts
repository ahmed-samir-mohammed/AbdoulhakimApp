import { Component, OnInit } from '@angular/core';
import '../../../assets/js/audio-playr.js';

declare var Plyr: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const player = new Plyr('#player');
  }
}
