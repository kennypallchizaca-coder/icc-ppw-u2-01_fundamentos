import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './FormularioPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage {

  private fb = inject(FormBuilder);

  // FORMULARIO CORRECTO
  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: ['', [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });


  // VALIDACIÓN DE CAMPOS
  isValidField(fieldName: string): boolean | null {
    return this.myForm.controls[fieldName].errors && this.myForm.controls[fieldName].touched;
  }
  
  getFieldError(fieldName: string): string | null {
    if (!this.myForm.controls[fieldName]) return null;

    const errors = this.myForm.controls[fieldName].errors || {};
    for(const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es obligatorio.';
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



  // SUBMIT
  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
console.log('Datos del formulario', this.myForm.value);
alert('Formulario enviado correctamente');
    this.myForm.reset();
    }
}
