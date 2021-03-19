/**
 * @description
 * Enum use for setting the component Types.
 * @usageNotes
 * ```ts
 *      componentType: ComponentType.TextBox
 * ```
 */
export const enum ComponentType {
    TextBox = 0,
    TextArea = 1,
    Select = 2,
    DatePicker = 3,
    Radio = 4,
    Checkbox = 5,
    Button = 6,
    SlideToggle = 7,
    Slider = 8,
    ButtonToggle = 9,
    AutoComplete = 10,
    Chip = 11,
    Editor = 12
}
/**
 * @description
 * Enum use for setting the True and false Flag.
 * @usageNotes
 * ```ts
 *      multiple: TrueFalse.False
 * ```
 */
export const enum TrueFalse {
    False,
    True
}
/**
 * @description
 * Enum use for setting the attribute Types.
 * @usageNotes
 * ```ts
 *      componentProperty: {
 *        attrType: InputTypes.Text
 *      }
 * ```
 */
export const enum InputTypes {
    Color = "color",
    Date = "date",
    DatetimeLocal = "datetime-local",
    Email = "email",
    Month = "month",
    Number = "number",
    Password = "password",
    Search = "search",
    Tel = "tel",
    Text = "text",
    Time = "time",
    Url = "url",
    Week = "week",
    /**
        * @usageNotes Should be only use for Buttom
    */
    Button = "button",
    Submit = "submit",
    DragDrop = "dragDrop"
}
/**
 * @description
 * Enum use for Appearance of the control.
 * @usageNotes
 * Before and After property should be only use for Checkbox and Radio button
 * ```ts
 *       if (componentType == ComponentType.Radio && componentType == ComponentType.Checkbox) THEN
 *          only use Appearance Before and After
 * ```
 */
export const enum Appearance {
    /**
        * @usageNotes Should be only use for input, textbox, and select
    */
    Plain = "plain",
    Legacy = "legacy",
    Standard = "standard",
    Fill = "fill",
    Outline = "outline",
    /**
        * @usageNotes Should be only use for label position
    */
    Before = "before",
    After = "after",
    /**
        * @usageNotes Should be only use for select
    */
    Multiple = "true",

    /**
        * @usageNotes Should be only use for Buttom
    */
    Basic = 0,
    Raised = 1,
    Stroked = 2,
    Flat = 3,
    Icon = 4,
    FAB = 5,
    MiniFAB = 6,
    routeLink = 7,
    routeHref = 8
}
/**
 * @description
 * Defines the flow order of child items within a flexbox container.
 * @usageNotes
 * ```ts
 *       layoutDirection: FxLayout.Row
 * ```
 */
export const enum FxLayout {
    Row = "row",
    Column = "column"
}
/**
 * @description
 * Enum use for Alignment Layout Direction.
 * @usageNotes
 * ```ts
 *      alignmentLayoutDirectionHorizontal: AlignmentLayoutDirection.SpaceAround
        alignmentLayoutDirectionVertical: AlignmentLayoutDirection.SpaceAround
 * ```
 */
export const enum AlignmentLayoutDirection {
    None = "none",
    Start = "start",
    Center = "center",
    End = "end",
    SpaceAround = "space-around",
    SpaceBetween = "space-between",
    SpaceEvenly = "space-evenly"
}
/**
 * @description
 * Enum use for setting the Floating label.
 * @usageNotes
 * ```ts
 *      componentProperty: {
 *        floatLabel: Floatinglabel.Always
 *      }
 * ```
 */
export const enum Floatinglabel {
    Auto = "auto",
    Always = "always"
}

/**
 * @description
 * Enum use for setting HTTP method.
 * @usageNotes
 * ```ts
 *      this.genericHttpClientService.Delete(this.deleteUserUrl).subscribe(item => {}, error => {});
 * ```
 */
export const enum HttpMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
}
