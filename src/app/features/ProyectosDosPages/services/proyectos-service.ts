import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }

  proyectos = signal<Proyecto[]>([
    {
      id: 1,
      nombre: 'Proyecto 1',
      descripcion: 'Descripción del Proyecto 1',
    },
  ]);


  addProyecto(newProyecto : Proyecto) {
    this.proyectos.set([...this.proyectos(), newProyecto]);
  }
}
