import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  @Input()
  color: string;

  @Input()
  personName: string;

  constructor() {
    this.color = 'gray';
    this.personName = 'No one';
  }

  ngOnInit(): void {
  }

  sayHello(): void {
    alert('Hello from say hello to ' + this.personName + '!');
  }

}
