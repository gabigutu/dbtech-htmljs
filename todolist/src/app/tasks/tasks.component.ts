import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ITask } from './itask';
import _ from 'lodash';
import { Dictionary } from './idictionary';

const tasksEndpoint = 'https://jsonplaceholder.typicode.com/todos';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Dictionary<ITask>;

  constructor() {
    this.tasks = {};
  }

  ngOnInit(): void {
    axios.get(tasksEndpoint).then(response => {
      // this.tasks = response.data;
      this.tasks = _.groupBy(response.data, 'userId');
      console.log(this.tasks);
    });
  }

  setActive(index: number, userId: number): void {
    // console.log('task id = ', index, ' user id = ', userId);
    this.tasks[userId][index].active = this.tasks[userId][index].active === true ? false : true;
  }

  // TODO:
  // double-click => camp editabil
  // modificare date si trimitere la server

}
