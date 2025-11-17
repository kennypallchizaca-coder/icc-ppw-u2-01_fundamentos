# Programación y Plataformas Web

## Frameworks Web: Angular

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" width="80" alt="Angular Logo">
</div>

## Práctica 4: Formularios Reactivos en Angular

### Autor

**Pablo Torres**  
📧 ptorresp@ups.edu.ec  
💻 GitHub: PabloT18

---

# Introducción a los Formularios en Angular

Los **formularios reactivos (Reactive Forms)** son una de las herramientas más potentes de Angular para gestionar formularios de manera **estructurada, validada y programática**.  
A diferencia de los formularios basados en plantilla (`template-driven forms`), los formularios reactivos se definen y controlan desde el TypeScript, ofreciendo mayor control y escalabilidad.

## Características principales

* Creación de formularios complejos con **controles anidados** (`FormGroup`, `FormArray`).
* **Validaciones sincrónicas y asincrónicas** totalmente configurables.
* Respuesta reactiva ante cambios del usuario mediante `valueChanges`.
* Integración sencilla con servicios, APIs o componentes personalizados.
* Mantenimiento y depuración más simples.

---

## Tipos de formularios en Angular

| Característica | Template-driven Forms          | Reactive Forms                            |
| -------------- | ------------------------------ | ----------------------------------------- |
| Definición     | En HTML con `ngModel`          | En TypeScript con `FormBuilder`           |
| Control        | Angular controla el modelo     | El desarrollador controla el modelo       |
| Escalabilidad  | Ideal para formularios simples | Ideal para formularios grandes            |
| Sincronización | Automática (two-way binding)   | Unidireccional y controlada               |
| Validaciones   | En el HTML con atributos       | En TypeScript con funciones de validación |

---

## Clases principales de los formularios reactivos

| Clase           | Descripción                           | Ejemplo                                    |
| --------------- | ------------------------------------- | ------------------------------------------ |
| **FormControl** | Representa un campo individual.       | `nombre = new FormControl('');`            |
| **FormGroup**   | Agrupa varios controles.              | `form = new FormGroup({ nombre, email });` |
| **FormArray**   | Permite listas o conjuntos dinámicos. | `emails = new FormArray([]);`              |

Cada una es **reactiva**, es decir, puede notificar y reaccionar a los cambios en tiempo real.

---

## Validaciones

### Validaciones Sincrónicas

Se ejecutan de inmediato cuando cambia el valor del campo.

Ejemplos:

```ts
Validators.required
Validators.min(10)
Validators.email
Validators.minLength(3)
```

### Validaciones Asincrónicas

Se ejecutan en segundo plano, por ejemplo, para consultar un API o verificar datos existentes.

```ts
new FormControl('', [], [this.usuarioDisponible.bind(this)]);
```

### Propiedades útiles de los controles

| Propiedad           | Significado                     |
| ------------------- | ------------------------------- |
| `value`             | Valor actual                    |
| `valid` / `invalid` | Estado de validez               |
| `touched`           | Si el usuario interactuó        |
| `dirty`             | Si el valor fue modificado      |
| `errors`            | Detalle de los errores actuales |

---

## Ventajas de los Formularios Reactivos

1. Control total desde el código TypeScript.
2. Mayor escalabilidad y mantenibilidad.
3. Más fáciles de probar y depurar.
4. Integración sencilla con servicios o APIs.
5. Totalmente compatibles con la detección de cambios `OnPush`.

---

## Preparación del entorno

Antes de comenzar con las prácticas:

1. Asegúrate de tener **Bootstrap 5** agregado en el `index.html`:

   ```html
   <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
     rel="stylesheet"
     crossorigin="anonymous"
   />
   ```
2. Importa el **ReactiveFormsModule** en cada componente standalone que lo necesite.

---

## PRÁCTICA 1: Formularios Básicos

En esta primera práctica se crea un formulario con campos **nombre, edad y correo**, aplicando validaciones básicas y mostrando mensajes de error personalizados.

El código correspondiente se encuentra en el componente `FormularioPage` (`src/app/features/Formularios/Pages/Formulario/FormularioPage.ts` y su plantilla HTML asociada).

---

## Clase auxiliar `FormUtils`

En proyectos de Angular con múltiples formularios, es común repetir la misma lógica de validación: verificar si un campo es válido, mostrar los mensajes de error y traducir los tipos de error a textos comprensibles.

Para evitar esta repetición y mantener el código limpio, se centraliza toda la lógica de validación en la clase utilitaria `FormUtils` (`src/app/utils/FormUtils.ts`).

### ¿Por qué crear una clase `FormUtils` separada?

1. **Reutilización y consistencia**: todos los formularios de la aplicación comparten los mismos mensajes de error y reglas.
2. **Código más limpio**: el HTML se mantiene legible y se evita repetir bloques de validación.
3. **Escalabilidad y mantenimiento**: en aplicaciones grandes facilita mantener y extender validaciones.
4. **Control de errores centralizado**: nuevos validadores personalizados o asincrónicos se integran en un solo lugar.

Ejemplo de uso en una plantilla:

```html
@if (formUtils.isValidField(myForm, 'correo')) {
  <span class="form-text text-danger">
    {{ formUtils.getFieldError(myForm, 'correo') }}
  </span>
}
```

---

## PRÁCTICA 2: Formularios Dinámicos

En esta práctica se crea un formulario que permite **agregar y eliminar campos de manera dinámica**, usando la clase `FormArray`.  

Un caso típico es una lista de lenguajes de programación que el usuario puede extender libremente.

La implementación está en el componente `FormularioDynamic` (`src/app/features/Formularios/Pages/Formulario-dynamic`).

### Conceptos clave

* `FormArray` permite trabajar con **listas dinámicas** de controles.
* Se utiliza un `FormControl` independiente (`newLenguaje`) para capturar el valor que luego se inserta en el `FormArray`.
* Se agregan y eliminan elementos con métodos específicos (`onAddToLenguajes`, `onDeleteLenguaje`).
* Las validaciones se aplican tanto a cada control como al propio `FormArray` (por ejemplo, mínimo 3 lenguajes).

También se reutiliza `FormUtils` para mostrar los errores de cada elemento del arreglo, mediante los métodos:

* `isValidFieldInArray(formArray, index)`
* `getFieldErrorInArray(formArray, index)`

---

## PRÁCTICA 3: Formularios con Switches, Checkboxes y Radios

En esta práctica se desarrolla un formulario que utiliza controles booleanos y de selección: **interruptores**, **casillas de verificación** y **botones de opción**.

El código está en el componente `FormulariosMorePage` (`src/app/features/Formularios/Pages/Formulario-more`).  
Se gestionan los siguientes campos:

* `genero` — seleccionado mediante botones de opción (*radio*).
* `notificaciones` — interruptor tipo switch.
* `condiciones` — casilla obligatoria con `Validators.requiredTrue`.

`FormUtils` se sigue reutilizando para mostrar mensajes de error homogéneos.

---

## Navegación entre prácticas

Las rutas del módulo de formularios (`src/app/features/Formularios/Formularios-routes.ts`) permiten navegar entre las tres prácticas:

* `/formularios/basic` → Práctica 1: Formularios Básicos.
* `/formularios/dynamic` → Práctica 2: Formularios Dinámicos.
* `/formularios/more` → Práctica 3: Switches, Checkboxes y Radios.

---

## Resultados esperados

Para cada página de formularios se recomienda capturar:

1. Pantalla del formulario vacío.
2. Pantalla mostrando todos los errores de validación.
3. Pantalla del formulario enviado correctamente, mostrando el resultado (en consola o en la UI según el caso).

Estas capturas servirán como evidencia del correcto funcionamiento de los formularios reactivos implementados.

