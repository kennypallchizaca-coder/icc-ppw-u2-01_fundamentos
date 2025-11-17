import { Routes } from '@angular/router';
import { FormularioDynamic } from './Pages/Formulario-dynamic/Formulario-dynamic';
import { FormulariosMorePage } from './Pages/Formulario-more/Formulario-more';
import { FormularioPage } from '../Formulario/Formulario/FormularioPage';

export const formulariosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Formularios Básicos',
        component: FormularioPage,
      },
      {
        path: 'dynamic',
        title: 'Formularios Dinámicos',
        component: FormularioDynamic,
      },
      {
        path: 'more',
        title: 'Formulario Mas',
        component: FormulariosMorePage,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];

