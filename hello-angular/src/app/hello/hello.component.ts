import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  noName: string;
  buttonColor: string;

  constructor() {
    this.noName = 'No name';
    this.buttonColor = 'purple';
  }

  promtName(): void {
    const yourName = prompt('Your name');
    if (!_.isNil(yourName)) {
      this.noName = yourName;
    }
  }

  ngOnInit(): void {
  }

}
