import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-listado-proyectos',
  imports: [],
  templateUrl: './listado-proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProyectos { 

  listname = input.required<string>();
  proyectos = input.required<Proyecto[]>();
}
  