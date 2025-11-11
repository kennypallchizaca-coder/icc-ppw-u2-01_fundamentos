import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private readonly STORAGE_KEY = 'proyectos_APP';
  proyectos = signal<Proyecto[]>(this.loadProyectos());

  constructor() {
    effect(() => {
      const data = this.proyectos();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    });
  }

  private loadProyectos(): Proyecto[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data
      ? JSON.parse(data)
      : [
          {
            id: 1,
            nombre: 'Proyecto 1',
            descripcion: 'Descripción del Proyecto 1',
          },
        ];
  }

  addProyecto(newProyecto: Proyecto) {
    this.proyectos.set([...this.proyectos(), newProyecto]);
  }


  deleteProyecto(proyectoToDelete: Proyecto) {
    const updatedProyectos = this.proyectos().filter(
      (proyecto) => proyecto.id !== proyectoToDelete.id
    );
    this.proyectos.set(updatedProyectos);
  }

  removeallProyecto(proyectoToRemove: Proyecto) {
    this.proyectos.set([]);
  }


  removewithname(name: string) {
    const updatedProyectos = this.proyectos().filter(
      (proyecto) => proyecto.nombre !== name
    );
    this.proyectos.set(updatedProyectos);
  }

}
