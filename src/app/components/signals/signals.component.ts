import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstname = signal('Fulano ');
  public lastname = signal('de Tall');

  public fullname = computed(() => {
    return this.firstname() + this.lastname();
  });

  public array = signal([1]);

  constructor() {
    effect(() => {
      console.log(this.firstname());
      console.log(this.array());
    });
  }

  public updateName() {
    return this.firstname.set('Ciclano ');
  }

  public updateArray() {
    this.array.update((oldValue: Array<number>) => {
      console.log(oldValue);
      return [...oldValue, 2];
    });
  }
}
