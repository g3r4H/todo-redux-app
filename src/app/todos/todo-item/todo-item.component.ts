import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('itemInput') itemInput!: ElementRef;

  checkCompleted!: FormControl;
  textInput!: FormControl;
  editing = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.checkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
    this.textInput = new FormControl(this.todo.text, Validators.required);
  }

  edit() {
    this.editing = true;
    this.textInput.setValue(this.todo.text);
    setTimeout(() => {
      this.itemInput.nativeElement.select();
    }, 1);
  }

  endEditing() {
    this.editing = false;
    if (this.textInput.invalid || this.textInput.value === this.todo.text) {
      return;
    }
    this.store.dispatch(
      actions.edit({ id: this.todo.id, text: this.textInput.value })
    );
  }

  eliminate() {
    this.store.dispatch(actions.eliminate({ id: this.todo.id }));
  }
}
