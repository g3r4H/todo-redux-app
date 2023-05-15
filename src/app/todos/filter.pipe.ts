import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { FilterType } from './filter/filter.actions';

@Pipe({
  name: 'todoFilter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: FilterType): Todo[] {
    switch (filter) {
      case 'Completed':
        return todos.filter((filter) => filter.completed);
      case 'Active':
        return todos.filter((filter) => !filter.completed);
      default:
        return todos;
    }
  }
}
