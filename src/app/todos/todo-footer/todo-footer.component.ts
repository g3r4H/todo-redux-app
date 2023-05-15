import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FilterType, setFilter } from '../filter/filter.actions';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: FilterType = 'All';
  filters: FilterType[] = ['All', 'Active', 'Completed'];
  pending = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    /* this.store.select('filter').subscribe((filter) => {
      this.currentFilter = filter;
    }); */

    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.pending = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  changeFilter(filter: FilterType) {
    this.store.dispatch(setFilter({ filter }));
    this.currentFilter = filter;
  }

  clearCompleted() {
    this.store.dispatch(actions.clearCompleted());
  }
}
