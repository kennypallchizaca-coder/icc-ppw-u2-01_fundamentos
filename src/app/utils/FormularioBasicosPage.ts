import { FormGroup, ValidationErrors } from "@angular/forms";
export class FormularioBasicosPage {
    static isValidField(fieldName: string, myForm: FormGroup): boolean | null {
        return myForm.controls[fieldName].errors && myForm.controls[fieldName].touched;
    }

    static getFieldError(fieldName: string, myForm: FormGroup): string | null {
        if (!myForm.controls[fieldName]) return null;
        const errors: ValidationErrors = myForm.controls[fieldName].errors || {};
        return this.getFieldErrorMessage(errors);
    }

    static getFieldErrorMessage(errors: ValidationErrors): string | null {
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
            }
        }
        return null;
    }

}