import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  static emailPattern =
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$';

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    const control = form.controls[fieldName];
    return !!control && !!control.errors && control.touched;
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    const control = form.controls[fieldName];
    if (!control) return null;

    const errors: ValidationErrors = control.errors ?? {};
    return FormUtils.getTextError(errors);
  }

  static isValidFieldInArray(
    formArray: FormArray,
    index: number,
  ): boolean | null {
    const control = formArray.at(index);
    return !!control && !!control.errors && control.touched;
  }

  static getFieldErrorInArray(
    formArray: FormArray,
    index: number,
  ): string | null {
    if (formArray.length === 0) return null;

    const control = formArray.at(index);
    const errors: ValidationErrors = control?.errors ?? {};
    return FormUtils.getTextError(errors);
  }

  static getTextError(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'min':
          return `El valor mínimo es ${errors['min'].min}.`;
        case 'email':
          return 'Formato de correo inválido.';
        case 'emailTaken':
          return 'El correo ya está siendo utilizado.';
        case 'invalidName':
          return 'El nombre no puede ser ocupado.';
        case 'pattern':
          if (errors['pattern'].requiredPattern === FormUtils.emailPattern) {
            return 'El formato del correo electrónico es incorrecto.';
          }
          return 'Error de patrón (expresión regular).';
        default:
          return 'Error de validación no controlado.';
      }
    }
    return null;
  }
}

