import { IValidator } from './ivalidator';
import {ComponentType, Appearance, ComponentPosition} from './component-type.enum';
import { from } from 'rxjs';
export interface IMeta {
  componentStyle?: IComponentStyle;
  formControlName?: string;
  componentType?: ComponentType;
  options?: string[];
  collections?: any;
  value?: any;
  attrType?: string | any;
  validations?: IValidator[];
}

export interface IComponentStyle {
  componentPosition?: ComponentPosition; 
  name : string;
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


