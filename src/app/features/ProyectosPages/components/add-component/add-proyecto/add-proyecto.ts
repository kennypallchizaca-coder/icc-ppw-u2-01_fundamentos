import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto {
  //outputs
  newProyecto = output<Proyecto>();

  name = signal('');
  description = signal('');

    changeName(value: string) {
    this.name.set(value);
  }

  changeDescription(value: string) {
    this.description.set(value);
  }


  addProyecto() {
    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() * 10000),
      nombre: this.name(),
      descripcion: this.description(),
    };
    this.newProyecto.emit(newProyecto);
    this.name.set('');
    this.description.set('');
  }

}


