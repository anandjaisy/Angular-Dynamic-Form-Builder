import { ComponentRef, Directive } from '@angular/core';
import { Input, OnInit, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IComponentConfig } from '../model/imeta';
import { ConstantValues } from '../model/constant-values';

@Directive({
  selector: "[reactiveField]"
})
export class ReactiveFieldDirective implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: FormGroup;
  private componentRef: ComponentRef<any>;
  constructor(private viewContainerRef: ViewContainerRef) { }
  ngOnInit() {
    if (this.field.componentType !== undefined) {
      this.componentRef =  this.viewContainerRef.createComponent(ConstantValues.ComponentMapper[this.field.componentType]);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
    }
  }
}
