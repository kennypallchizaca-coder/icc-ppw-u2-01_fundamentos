import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


@Component({
  selector: 'app-perfil-page',
  standalone: true,
  templateUrl: './perfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerfilPage {
  name = signal('Juan');
  lastName = signal('Pérez');
  age = signal(30);

  getFullName(): string {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  }

  changeData(): void {
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }

  changeAge(): void {
    this.age.set(18);
  }

  resetData(): void {
    this.name.set('Juan');
    this.lastName.set('Pérez');
    this.age.set(30);
  }
}
