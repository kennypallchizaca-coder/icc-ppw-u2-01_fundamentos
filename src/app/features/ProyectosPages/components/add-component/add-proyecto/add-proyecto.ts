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
  removeProyecto = output<Proyecto>();
  remove1Proyecto = output<Proyecto>();
  removewithnm = output<string>();


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

  deleteProyecto() {
    const proyectoToDelete: Proyecto = {
      id: Math.floor(Math.random() * 10000),
      nombre: this.name(),
      descripcion: this.description(),
    };
    this.removeProyecto.emit(proyectoToDelete);
    this.name.set('');
    this.description.set('');
  }


  removeallProyecto() {
    const proyectoToRemove: Proyecto = {
      id: Math.floor(Math.random() * 10000),
      nombre: this.name(),
      descripcion: this.description(),
    };
    this.remove1Proyecto.emit(proyectoToRemove);
    this.name.set('');
    this.description.set('');
  }
  
  removewithname() {
    const nameToRemove = this.name();
    this.removewithnm.emit(nameToRemove);
    this.name.set('');
    this.description.set('');
  }

}


