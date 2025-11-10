import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ListadoProyectos } from "../ProyectosPages/components/listado-proyectos/listado-proyectos";
import { ProyectosService } from "./services/proyectos-service";
import { AddProyecto } from "../ProyectosPages/components/add-component/add-proyecto/add-proyecto";

@Component({
  selector: 'app-proyectos-dos-pages',
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './ProyectosDosPages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosDosPages { 
  proyectosService = inject(ProyectosService);
}
