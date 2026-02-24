import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Model } from '../../models/repository.model';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {

  //Método para configurar los mensajes de errores de todas las validaciones
  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

    const config: any = {

      'required': 'This field is required.',
      'minlength': `Minimum ${validatorValue?.requiredLength} characters.`,
      'maxlength': `Maximum ${validatorValue?.requiredLength} characters.`,
      'min': `The value must be greater than or equal to ${validatorValue?.min}.`,
      'pattern': 'The format entered is not valid.',
      'unique': 'You cannot enter duplicate skills.',//Validación personalizada
      'courseExists': 'This course already exists'//Validación personalizada
      
    };

    return config[validatorName] || 'Field invalid';//Mensaje de alerta en caso de que no encuentre el suyo
  }

  //Método para saber si el campo esta sucio o es inválido
  showError(control: AbstractControl | null): boolean {

    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  //Método de validacion personalizado para evitar duplicados entre skills

  static unique(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control instanceof FormArray) {
        // Filtramos los controles que tienen un valor igual a otro control (excluyéndose a sí mismos)
        let badElems = control.controls.filter((child, index) => {
          return control.controls.filter((c2, i2) => i2 != index)
            .some(target => target.value != "" && target.value == child.value);
        });

        if (badElems.length > 0) {
          return { "unique": {} }; // Devolvemos la clave "unique"
        }
      }
      return null;
    };
  }


  //Método de validacion personalizado para evitar duplicados en base a los datos que hay en la tabla

  static courseExists(model: Model, getId: () => number | undefined): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const currentId = getId(); // Obtenemos el ID justo en el momento de validar
      const exists = model.getCourses().some(course =>
        course.title?.toLowerCase() === control.value.toLowerCase() &&
        course.id !== currentId
      );

      return exists ? { 'courseExists': true } : null;
    };
  }

}
