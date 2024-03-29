import { Component, OnInit, Input } from '@angular/core';
import { IComponentConfig } from '../../model/imeta';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IOptions } from '../../model/imeta'
@Component({
  selector: 'lib-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss','../../common/style.scss']
})
export class AutoCompleteComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: UntypedFormGroup;
  autoCompleteControl = new UntypedFormControl();
  constructor() { }
  filteredOptions: Observable<IOptions[]>;

  ngOnInit() {
    this.filteredOptions = this.autoCompleteControl.valueChanges.pipe(startWith(''),map(value => this._filter(value)));
  }

  private _filter(value: string): IOptions[] {
    const filterValue = value.toLowerCase();
    return this.field.componentProperty.options.filter(option => option.viewValue.toLowerCase().includes(filterValue));
  }

  optionSelected(value) {
    this.group.get(this.field.formControlName).setValue(value);
  }
}