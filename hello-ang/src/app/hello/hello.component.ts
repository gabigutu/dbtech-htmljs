import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name: string;
  userAge: number;
  altceva: string;

  constructor() {
    this.name = 'No name';
    this.userAge = 0;
    this.altceva = 'Pentru child';
  }

  ngOnInit(): void {
    this.name = 'Vasilica';

    const that = this;
    setInterval(function() {
      console.log(that.userAge);
      that.altceva += 'dd';
    }, 1000);
  }

  nameKeyUp(event: any): void {
    console.log('you pressed key; value is ', event.target.value);
    this.name = event.target.value;
  }

}
