import { TextboxComponent } from '../component/textbox/textbox.component';
import { TextAreaComponent } from '../component/text-area/text-area.component';
import { SelectComponent } from '../component/select/select.component';
import { DatePickerComponent } from '../component/date-picker/date-picker.component';
import { RadioComponent } from '../component/radio/radio.component';
import { CheckboxComponent } from '../component/checkbox/checkbox.component';
import { ButtonComponent } from '../component/button/button.component';
import { SlideToggleComponent } from '../component/slide-toggle/slide-toggle.component';
import { SliderComponent } from '../component/slider/slider.component';
import { ButtonToggleComponent } from '../component/button-toggle/button-toggle.component';
import { AutoCompleteComponent } from '../component/auto-complete/auto-complete.component';
import { ChipsComponent } from '../component/chips/chips.component';

export class ConstantValues {
    public static ComponentMapper = 
    [
        TextboxComponent, TextAreaComponent, SelectComponent, DatePickerComponent, RadioComponent, CheckboxComponent, 
        ButtonComponent, SlideToggleComponent, SliderComponent, ButtonToggleComponent, AutoCompleteComponent, ChipsComponent
    ];
}
