import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { IComponentConfig } from '../../model/imeta';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { IOptions } from '../../model/imeta';
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'falcon-chip',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: FormGroup;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  selectable = true;
  removable = true;
  addOnBlur = true;
  filteredOptions: Observable<IOptions[]>;
  autoCompleteControl = new FormControl();
  chipsList: IOptions[] = [];

  @ViewChild('chipInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  items: FormArray;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.filteredOptions = this.autoCompleteControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.chipsList.push(
        {
          viewValue: value.trim(),
          value: value.trim()
        });
      this.items = this.group.get(this.field.formControlName) as FormArray;
      this.items.push(this.createItem(value));
    }

    if (input) {
      input.value = '';
    }
  }

  createItem(value: String): FormGroup {
    return this.fb.group({
      viewValue: value,
      value: value
    });
  }

  remove(option: IOptions): void {
    const index = this.chipsList.indexOf(option);

    if (index >= 0) {
      this.chipsList.splice(index, 1);
      this.items.removeAt(index)
    }
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {
    this.chipsList.push({ viewValue: event.option.value, value: event.option.value });
    this.items = this.group.get(this.field.formControlName) as FormArray;
    this.items.push(this.createItem(event.option.value));
  }

  private _filter(value: string): IOptions[] {
    if (value !== null) {
      const filterValue = value.toLowerCase();
      return this.field.componentProperty.options.filter(option => option.value.toLowerCase().includes(filterValue));
    }
  }

  drop(event: CdkDragDrop<IOptions[]>) {
    moveItemInArray(this.field.componentProperty.options, event.previousIndex, event.currentIndex);
  }
}
