import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent {
  allCompleted = false;

  constructor(private store: Store<AppState>) {}

  toggleAll() {
    this.allCompleted = !this.allCompleted;
    this.store.dispatch(actions.toggleAll({ toggleAll: this.allCompleted }));
  }
}
