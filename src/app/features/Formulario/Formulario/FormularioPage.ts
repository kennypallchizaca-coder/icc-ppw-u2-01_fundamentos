import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/FormUtils';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './FormularioPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  // Formulario básico
  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });

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
