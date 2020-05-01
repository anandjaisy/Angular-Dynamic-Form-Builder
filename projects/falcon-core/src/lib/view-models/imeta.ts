import { IValidator } from './ivalidator';
import { ComponentType, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel, InputTypes } from './component-type.enum';
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
  attrType?: string | InputTypes;
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
 *      fxLayout: FxLayout.Row,
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
 * @param fxLayout Defines the flow order of child items within a flexbox container.
 * @param fxLayoutGap Defines if child items within a flexbox container should have a gap.
 * @param alignmentLayoutDirectionHorizontal Defines how flexbox items are aligned according to both the main-axis and the cross-axis, within a flexbox container.
 * @param alignmentLayoutDirectionVertical Defines how flexbox items are aligned according to both the main-axis and the cross-axis, within a flexbox container.
 * @param fxFlex This markup specifies the resizing of its host element within a flexbox container flow.
 * @param fxFlexOrder Defines the order of a flexbox item.
 * @param fxFlexAlign Works like fxLayoutAlign, but applies only to a single flexbox item, instead of all of them.
 * @param fxFlexFill Maximizes width and height of element in a layout container.
 * @param fxShow This markup specifies if its host element should be displayed (or not).
 * @param fxHide This markup specifies if its host element should NOT be displayed.
 * @param ngClass Enhances the ngClass directives with class changes based on mediaQuery activations.
 * @param ngStyle Enhances the ngStyle directive with style updates based on mediaQuery activations.
 * @usageNotes
 * ```ts
 *       layoutConfig: {
 *        fxLayout: FxLayout.Row
 *        fxLayoutGap: "10px"
 *        textAreaProperty: AlignmentLayoutDirection.SpaceAround,
 *        alignmentLayoutDirectionVertical: AlignmentLayoutDirection.SpaceAround
 *        fxFlex: "10"
 *        fxFlexOrder: "2"
 *        fxFlexAlign: "center"
 *        fxFlexFill: "fxFlexFill"
 *        fxShow : true
 *        fxHide : true
 *        ngClass: {'fxClass-sm': hasStyle}
 *        ngStyle: {'font-size.px': 10, color: 'blue'}
 *    }
 * ```
 */
export declare interface ILayoutConfig {
  fxLayout?: FxLayout;
  fxLayoutGap?: string;
  fxLayoutAlignHorizontal?: AlignmentLayoutDirection;
  fxLayoutAlignVertical?: AlignmentLayoutDirection;
  fxFlex? : string | any;
  fxFlexOrder?: string;
  fxFlexAlign?: string;
  fxFlexFill?: string;
  fxShow?: boolean;
  fxHide?: boolean;
  ngClass?: string;
  ngStyle?: string;
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
