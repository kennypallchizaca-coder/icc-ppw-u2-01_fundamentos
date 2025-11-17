import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../../utils/FormUtils';

@Component({
  selector: 'app-formulario-dynamic',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-dynamic.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioDynamic {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lenguajes: this.fb.array(
      [
        this.fb.control('Python', [
          Validators.required,
          Validators.minLength(3),
        ]),
        this.fb.control('Java', [
          Validators.required,
          Validators.minLength(3),
        ]),
      ],
      {
        validators: [Validators.minLength(3)],
      },
    ),
  });

  // Control independiente para agregar nuevos lenguajes
  newLenguaje: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  get lenguajes(): FormArray {
    return this.myForm.get('lenguajes') as FormArray;
  }

  onAddToLenguajes() {
    if (this.newLenguaje.invalid) return;

    this.lenguajes.push(
      this.fb.control(this.newLenguaje.value, [
        Validators.required,
        Validators.minLength(3),
      ]),
    );

    this.newLenguaje.reset();
  }

  onDeleteLenguaje(index: number) {
    this.lenguajes.removeAt(index);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) return;

    console.log('Formulario enviado:', this.myForm.value);
  }
}
