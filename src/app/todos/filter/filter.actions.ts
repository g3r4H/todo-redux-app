import { createAction, props } from '@ngrx/store';

export type FilterType = 'All' | 'Active' | 'Completed';

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{ filter: FilterType }>()
);
