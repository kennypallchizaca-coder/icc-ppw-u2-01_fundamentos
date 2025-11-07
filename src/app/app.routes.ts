import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';
import { ProyectosPages } from './features/ProyectosPages/ProyectosPages';
import { ProyectosDosPages } from './features/ProyectosDosPages/ProyectosDosPages';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'perfil', component: PerfilPage },
  { path: 'proyectos', component: ProyectosPages },
  { path: 'proyectos-dos', component: ProyectosDosPages },
];
