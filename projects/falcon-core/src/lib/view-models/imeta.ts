import { IValidator } from './ivalidator';
import {ComponentType, Appearance, ComponentPosition, AlignmentLayoutDirection} from './component-type.enum';
import { from } from 'rxjs';
export interface IMeta {
  layoutConfig?: ILayoutConfig;
  componentConfig?: IComponentConfig[]
}

export interface IComponentProperty {
  name : string;
  attrType?: string | any;
  appearance : Appearance;
  placeHolder? : string;
  suffix? : ISuffixPrefixConfig;
  prefix? : ISuffixPrefixConfig;
  hint? : string
  css? : string
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
  value?: any;
  validations?: IValidator[];
}
export interface ILayoutConfig {
  fxLayoutGap?: string;
  layoutDirection? : ComponentPosition;
  alignmentLayoutDirectionHorizontal? : AlignmentLayoutDirection
  alignmentLayoutDirectionVertical? : AlignmentLayoutDirection
}


