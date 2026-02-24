import { Directive, Input } from '@angular/core';
import { ValidationService } from '../services/validation.service';

@Directive({
  selector: '[appControlError]',
  standalone: true,
  exportAs: 'controlError'
})
export class ControlErrorDirective {

  //Input del tipo any para evitar conflictos
  @Input('appControlError') control: any;

  constructor(private validation: ValidationService) { }

  get message(): string | null {

    // Verificamos que el control exista, tenga errores y haya sido interactuado
    if (this.control && this.control.errors && (this.control.dirty || this.control.touched)) {
      const errorKeys = Object.keys(this.control.errors);
      if (errorKeys.length > 0) {
        const firstKey = errorKeys[0];
        return this.validation.getValidatorErrorMessage(firstKey, this.control.errors[firstKey]);
      }
    }
    return null;
  }
}


