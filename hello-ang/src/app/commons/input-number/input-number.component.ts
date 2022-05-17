import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input()
  test: string;
  @Input()
  anotherTest: string;

  constructor() {
    this.test = '';
    this.anotherTest = '';
  }

  ngOnInit(): void {
  }

}
