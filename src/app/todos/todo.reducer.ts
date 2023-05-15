import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('First To-Do'),
  new Todo('2nd To-Do'),
  new Todo('3rd To-Do'),
];

export const todoReducer = createReducer<Todo[]>(
  initialState,
  on(actions.create, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }),
  on(actions.edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      } else {
        return todo;
      }
    });
  }),
  on(actions.eliminate, (state, { id }) => {
    return state.filter((todo) => todo.id != id);
  }),
  on(actions.toggleAll, (state, { toggleAll }) => {
    return state.map((todo) => {
      return { ...todo, completed: toggleAll };
    });
  }),
  on(actions.clearCompleted, (state) => state.filter((todo) => !todo.completed))
);
