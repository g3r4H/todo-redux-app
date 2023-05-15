import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Create To-Do',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle To-Do',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit To-Do',
  props<{ id: number; text: string }>()
);

export const eliminate = createAction(
  '[TODO] Eliminate To-Do',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Toggle All To-Do',
  props<{ toggleAll: boolean }>()
);

export const clearCompleted = createAction('[TODO] Clear Completed');
