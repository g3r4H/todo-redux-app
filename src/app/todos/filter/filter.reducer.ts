import { createReducer, on } from '@ngrx/store';
import { setFilter, FilterType } from './filter.actions';

export const initialState: FilterType = 'All';

export const filterReducer = createReducer<FilterType>(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);
