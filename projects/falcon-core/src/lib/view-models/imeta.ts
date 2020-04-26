import { IValidator } from './ivalidator';
import {ComponentType, Appearance, ComponentPosition, AlignmentLayoutDirection, Floatinglabel} from './component-type.enum';
import { from } from 'rxjs';
export interface IMeta {
  layoutConfig?: ILayoutConfig;
  componentConfig?: IComponentConfig[]
}

export interface IComponentProperty {
  label? : string;
  attrType?: string | any;
  appearance? : Appearance;
  placeHolder? : string;
  suffix? : ISuffixPrefixConfig;
  prefix? : ISuffixPrefixConfig;
  hint? : string;
  componentCss? : string;
  groupCss? : string;
  floatLabel? : Floatinglabel;
  options? : string[];
  value? : string | any;
}

export interface ISuffixPrefixConfig {
  isIcon : boolean;
  text : string;
}

export interface IComponentConfig {
  componentProperty?: IComponentProperty;
  formControlName?: string;
  componentType?: ComponentType;
  options?: string[];
  collections?: any;
  validations?: IValidator[];
}
export interface ILayoutConfig {
  fxLayoutGap?: string;
  layoutDirection? : ComponentPosition;
  alignmentLayoutDirectionHorizontal? : AlignmentLayoutDirection
  alignmentLayoutDirectionVertical? : AlignmentLayoutDirection
}


