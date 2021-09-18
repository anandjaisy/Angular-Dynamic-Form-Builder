import { IValidator } from './ivalidator';
import { ComponentType, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel, InputTypes } from './component-type.enum';
import { IMatHint } from './interface';
import { EventEmitter } from '@angular/core';

/**
 * @description
 * Interface use for setting the component meta.
 * @param mainLayout Define the main container for the layout.
 * @usageNotes
 * ```ts
 *       this.controlsConfig = { }
 * ```
 */
export declare interface IMeta {
  container: IContainer
}

/**
 * Container to hold sub layout
 * @param alignmentLayoutDirectionHorizontal Defines how flexbox items are aligned according to both the main-axis and the cross-axis, within a flexbox container.
 * @param alignmentLayoutDirectionVertical Defines how flexbox items are aligned according to both the main-axis and the cross-axis, within a flexbox container.
 * @param fxLayout Defines the flow order of child items within a flexbox container.
 * @param fxLayoutGap Defines if child items within a flexbox container should have a gap.
 * @usageNotes
 * ```ts
 *       layoutConfig: {
 *        fxLayout: FxLayout.Row,
 *        fxLayoutGap: "10px",
 *        textAreaProperty: AlignmentLayoutDirection.SpaceAround,
 *        alignmentLayoutDirectionVertical: AlignmentLayoutDirection.SpaceAround,
 *        layoutConfig: {}
 *    }
 * ```
 */
export declare interface IContainer {
  fxLayout?: FxLayout,
  fxLayoutAlignHorizontal?: AlignmentLayoutDirection;
  fxLayoutAlignVertical?: AlignmentLayoutDirection;
  fxLayoutGap?: string;
  layoutConfig?: ILayoutConfig[];
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
  hint?: IMatHint;
  componentCss?: string;
  componentStyle?: any;
  labelStyle?: any;
  labelCss?: string;
  groupCss?: string;
  groupStyle?: any;
  floatLabel?: Floatinglabel;
  options?: IOptions[] | any;
  value?: string | any;
  disabled?: boolean;
  color?: string;
  fxFlexLayout?: IfxFlexLayout;
  textAreaProperty?: ITextAreaProperty;
  sliderProperty?: ISliderProperty;
  selectProperty?: ISelectOptions;
  chipSelectedOptions?: IOptions[] | any;
  editorProperty?: any;
  event?: IComponentEvent<unknown>;
  visible?: boolean;
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
  isIcon?: boolean;
  text?: string;
  toolTipText?: string
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
  formArray?: ILayoutConfig[];
}
/**
 * @description
 * Interface use for setting the Layout Config.
 * @param fxLayout Defines the flow order of child items within a flexbox container.
 * @param fxLayoutGap Defines if child items within a flexbox container should have a gap.
 * @param alignmentLayoutDirectionHorizontal Defines how flexbox items are aligned according to both the main-axis and the cross-axis, within a flexbox container.
 * @param alignmentLayoutDirectionVertical Defines how flexbox items are aligned according to both the main-axis and the cross-axis, within a flexbox container.
 * @param fxLayoutAlign_lt_sm To extend the static API with responsive features, we will first associate specific breakpoint aliases with mediaQuery values (screen and (max-width: 599px)).
 * @param fxLayoutAlign_lt_md To extend the static API with responsive features, we will first associate specific breakpoint aliases with mediaQuery values (screen and (max-width: 959px)).
 * @param fxLayoutAlign_lt_xl To extend the static API with responsive features, we will first associate specific breakpoint aliases with mediaQuery values (screen and (max-width: 1279px)).
 * @param fxLayoutAlign_gt_xs To extend the static API with responsive features, we will first associate specific breakpoint aliases with mediaQuery values (screen and (max-width: 1919px)).
 * @param fxLayoutAlign_gt_sm To extend the static API with responsive features, we will first associate specific breakpoint aliases with mediaQuery values (screen and (min-width: 600px)).
 * @param fxLayoutAlign_gt_md To extend the static API with responsive features, we will first associate specific breakpoint aliases with mediaQuery values (screen and (min-width: 960px)).
 * @param fxLayoutAlign_gt_lg To extend the static API with responsive features, we will first associate specific breakpoint aliases with mediaQuery values (screen and (min-width: 1280px)).
 * @param gdAlignColumns Aligns the items column-wise.
 * @param gdAlignRows Aligns the items row-wise.
 * @param gdAuto Controls the auto placement for the grid.
 * @param gdAreas Describes the areas the grid contains.
 * @param gdColumns Defines the line names and track sizing functions of the grid columns.
 * @param gdRows Defines the line names and track sizing functions of the grid rows.
 * @param gdGap Defines the gap between grid items.
 * @usageNotes
 * ```ts
 *       layoutConfig: {
 *        fxLayout: FxLayout.Row,
 *        fxLayoutGap: "10px",
 *        textAreaProperty: AlignmentLayoutDirection.SpaceAround,
 *        alignmentLayoutDirectionVertical: AlignmentLayoutDirection.SpaceAround,
 *        gdAlignColumns: "start stretch",
 *        gdAlignRows: "start stretch",
 *        gdAreas: "area1 | area2 | area3",
 *        gdColumns: "60px 60px",
 *        gdRows : "60px 60px",
 *        gdGap : "60px 60px",
 *        gdAuto : "row dense"
 *    }
 * ```
 */
export declare interface ILayoutConfig {
  fxLayout?: FxLayout;
  fxLayoutGap?: string;
  fxLayout_xs?: string;
  fxLayoutAlignHorizontal?: AlignmentLayoutDirection;
  fxLayoutAlignVertical?: AlignmentLayoutDirection;
  fxLayoutAlign_lt_sm?: AlignmentLayoutDirection;
  fxLayoutAlign_lt_md?: AlignmentLayoutDirection;
  fxLayoutAlign_lt_lg?: AlignmentLayoutDirection;
  fxLayoutAlign_lt_xl?: AlignmentLayoutDirection;
  fxLayoutAlign_gt_xs?: AlignmentLayoutDirection;
  fxLayoutAlign_gt_sm?: AlignmentLayoutDirection;
  fxLayoutAlign_gt_md?: AlignmentLayoutDirection;
  fxLayoutAlign_gt_lg?: AlignmentLayoutDirection;
  gdAlignColumns?: AlignmentLayoutDirection;
  gdAlignRows?: AlignmentLayoutDirection;
  gdAreas?: string;
  gdAuto?: string;
  gdColumns?: string;
  gdRows?: string;
  gdGap?: string;
  componentConfig?: IComponentConfig[];
}

/**
 * @description
 * Interface use for CSS stylings for a DOM element nested within a DOM container.
 * @param fxFlex This markup specifies the resizing of its host element within a flexbox container flow.
 * @param fxFlexOrder Defines the order of a flexbox item.
 * @param fxFlexAlign Works like fxLayoutAlign, but applies only to a single flexbox item, instead of all of them.
 * @param fxFlexOffset Offset a flexbox item in its parent container flow layout.
 * @param fxFlexFill Maximizes width and height of element in a layout container.
 * @param fxShow This markup specifies if its host element should be displayed (or not).
 * @param fxHide This markup specifies if its host element should NOT be displayed.
 * @param ngClass Enhances the ngClass directives with class changes based on mediaQuery activations.
 * @param ngStyle Enhances the ngStyle directive with style updates based on mediaQuery activations.
 * @param fxFlex_xs screen and (max-width: 599px).
 * @param fxFlex_sm screen and (min-width: 600px) and (max-width: 959px).
 * @param fxFlex_md screen and (min-width: 960px) and (max-width: 1279px).
 * @param fxFlex_lg screen and (min-width: 1280px) and (max-width: 1919px).
 * @param fxFlex_xl screen and (min-width: 1920px) and (max-width: 5000px).
 * @param fxFlex_lt_sm screen and (max-width: 599px).
 * @param fxFlex_lt_md screen and (max-width: 959px).
 * @param fxFlex_lt_lg screen and (max-width: 1279px).
 * @param fxFlex_lt_xl screen and (max-width: 1919px).
 * @param fxFlex_gt_xs screen and (min-width: 600px).
 * @param fxFlex_gt_sm screen and (min-width: 960px).
 * @param fxFlex_gt_md screen and (min-width: 1280px).
 * @param fxFlex_gt_lg screen and (min-width: 1920px).
 * @usageNotes
 * ```ts
 *       layoutConfig: {
 *        fxFlex: "10",
 *        fxFlexOrder: "2",
 *        fxFlexAlign: "center",
 *        fxFlexFill: "fxFlexFill",
 *        fxFlexOffset: "20px"
 *        fxShow : true,
 *        fxHide : true,
 *        ngClass: {'fxClass-sm': hasStyle},
 *        ngStyle: {'font-size.px': 10, color: 'blue'}
 *    }
 * ```
 */
export declare interface IfxFlexLayout {
  fxFlex?: string | any;
  fxFlexOrder?: string;
  fxFlexOffset?: string;
  fxFlexAlign?: string;
  fxFlexFill?: string;
  fxShow?: boolean;
  fxHide?: boolean;
  ngClass?: string;
  ngStyle?: string;
  fxFlex_xs?: string;
  fxFlex_sm?: string;
  fxFlex_md?: string;
  fxFlex_lg?: string;
  fxFlex_xl?: string;
  fxFlex_lt_sm?: string;
  fxFlex_lt_md?: string;
  fxFlex_lt_lg?: string;
  fxFlex_lt_xl?: string;
  fxFlex_gt_xs?: string;
  fxFlex_gt_sm?: string;
  fxFlex_gt_md?: string;
  fxFlex_gt_lg?: string;
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
 * Disable is used for select option values
 * @usageNotes
 * ```ts
 *       componentProperty: {
 *        options: [{key : 'key-1', value : 'value-1', icon: 'material_icon', disabled: true}];
 *      }
 * ```
 */
export declare interface IOptions {
  viewValue?: string;
  value?: any;
  icon?: string;
  class?: string;
  disabled?: boolean;
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

/**
 * @description
 * @param change change event for the control
 * @param click click event for the control
 * Events for controls
 */
export declare interface IComponentEvent<T> {
  change?: EventEmitter<T>;
  click?: EventEmitter<T>;
}