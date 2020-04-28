import { IValidator } from './ivalidator';
import { ComponentType, Appearance, ComponentPosition, AlignmentLayoutDirection, Floatinglabel, InputTypes, TrueFalse, ButtonTypes } from './component-type.enum';
/**
 * @description
 * Interface use for setting the component meta.
 * @usageNotes
 * ```ts
 *       this.controlsConfig = { }
 * ```
 */
export declare interface IMeta {
  layoutConfig?: ILayoutConfig;
  componentConfig?: IComponentConfig[]
}
/**
 * @description
 * Interface use for setting the component property.
 * @usageNotes
 * ```ts
 *       componentProperty: {
 *         label: "Required Validation *",
 *         appearance: Appearance.Legacy,
 *         placeHolder: "Required Validation *",
 *         attrType: InputTypes.Text
 *       }
 ** ```
 */
export declare interface IComponentProperty {
  label?: string;
  attrType?: string | InputTypes | ButtonTypes;
  appearance?: Appearance;
  placeHolder?: string;
  suffix?: ISuffixPrefixConfig;
  prefix?: ISuffixPrefixConfig;
  hint?: string;
  componentCss?: string;
  componentStyle?: any;
  groupCss?: string;
  groupStyle?: any;
  floatLabel?: Floatinglabel;
  options?: IOptions[] | any;
  value?: string | any;
  disabled?: boolean;
  color?: string;
  textAreaProperty?: ITextAreaProperty;
  sliderProperty?: ISliderProperty;
  selectProperty? : ISelectOptions;
}
/**
 * @description
 * Interface use for setting the suffix and prefix.
 * @usageNotes
 * ```ts
 *       componentProperty: {
 *        label: "Prefix & Suffix icon",
 *        appearance: Appearance.Outline,
 *        placeHolder: "Prefix & Suffix icon",
 *        attrType: InputTypes.Text,
 *        prefix : {
 *          isIcon : true,
 *          text : "euro"
 *        },
 *        suffix : {
 *          isIcon: true,
 *          text : "done"
 *        }
 *      }
 * ```
 */
export declare interface ISuffixPrefixConfig {
  isIcon: boolean;
  text: string;
}
/**
 * @description
 * Interface use for setting the Component Config.
 * @usageNotes
 * ```ts
 *       layoutConfig: {
 *      layoutDirection: ComponentPosition.Row,
 *    }
 * ```
 */
export declare interface IComponentConfig {
  componentProperty?: IComponentProperty;
  formControlName?: string;
  componentType?: ComponentType;
  validations?: IValidator[];
}
/**
 * @description
 * Interface use for setting the Layout Config.
 * @usageNotes
 * ```ts
 *       layoutConfig: {
 *        textAreaProperty: AlignmentLayoutDirection.SpaceAround,
 *        alignmentLayoutDirectionVertical: AlignmentLayoutDirection.SpaceAround
 *    }
 * ```
 */
export declare interface ILayoutConfig {
  fxLayoutGap?: string;
  layoutDirection?: ComponentPosition;
  alignmentLayoutDirectionHorizontal?: AlignmentLayoutDirection
  alignmentLayoutDirectionVertical?: AlignmentLayoutDirection
}
/**
 * @description
 * Interface use for setting the TextArea Property.
 * @usageNotes
 * ```ts
 *       componentProperty: {
 *        textAreaProperty : {
 *          cdkTextareaAutosize : true,
 *          cdkAutosizeMinRows : 1,
 *          cdkAutosizeMaxRows : 2,
 *          rows : 2,
 *          cols : 2
 *        }
 *      }
 * ```
 */
export declare interface ITextAreaProperty {
  cdkTextareaAutosize?: boolean;
  cdkAutosizeMinRows?: number;
  cdkAutosizeMaxRows?: number;
  rows?: number;
  cols?: number
}

/**
 * @description
 * Interface use for setting the Mat Slider Property.
 * @usageNotes
 * ```ts
 *       componentProperty: {
 *        sliderProperty : {
 *          invert : true,
 *          step : 1,
 *          thumbLabel : false,
 *          vertical : true,
 *          horizontal : false
 *        }
 *      }
 * ```
 */
export declare interface ISliderProperty {
  invert?: boolean;
  thumbLabel?: boolean;
  vertical?: boolean;
  min?: number,
  max?: number,
  step?: number,
  tickInterval?: string | number
}
/**
 * @description
 * Interface use for setting the options meta.
 * @usageNotes
 * ```ts
 *       componentProperty: {
 *        options: [{key : 'key-1', value : 'value-1'}];
 *      }
 * ```
 */
export declare interface IOptions {
  viewValue: string;
  value: any;
}

/**
 * @description
 * Interface use for setting the options meta for select control.
 * @usageNotes
 * ```ts
 *       componentProperty: {
 *        selectProperty: {multiple : true};
 *      }
 * ```
 */
export declare interface ISelectOptions {
  single?: boolean;
  multiple?: boolean;
}
