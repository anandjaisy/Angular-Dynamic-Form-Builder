import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-code-button',
  templateUrl: './code-button.component.html',
  styleUrls: ['./code-button.component.scss'],
})
export class CodeButtonComponent {
  @Output() buttonClickEvent = new EventEmitter<string>();
  constructor() {}

  buttonClickEmitter() {
    this.buttonClickEvent.emit();
  }
}
