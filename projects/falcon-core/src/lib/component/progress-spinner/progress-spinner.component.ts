import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'falcon-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent implements OnInit {
  @Input() diameter: number = 100;
  @Input() color: ThemePalette;
  @Input() mode: ProgressBarMode;
  @Input() value: number;
  @Input() strokeWidth: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
