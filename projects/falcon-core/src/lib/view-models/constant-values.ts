import { TextboxComponent } from '../component/textbox/textbox.component';
import { TextAreaComponent } from '../component/text-area/text-area.component';
import { SelectComponent } from '../component/select/select.component';
import { DatePickerComponent } from '../component/date-picker/date-picker.component';
import { RadioComponent } from '../component/radio/radio.component';
import { CheckboxComponent } from '../component/checkbox/checkbox.component';
import { ButtonComponent } from '../component/button/button.component';

export class ConstantValues {
    public static ComponentMapper = [TextboxComponent,TextAreaComponent, SelectComponent, DatePickerComponent, RadioComponent, CheckboxComponent, ButtonComponent];
}
