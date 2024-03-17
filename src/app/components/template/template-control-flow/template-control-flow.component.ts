import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue: boolean = true;
  public isFalse: boolean = false;

  // public items = [{ name: 'Fulano de Tal' }];
  public items: Array<{ name: string }> = [{ name: 'Fulano de Tal' }];

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    return this.items.push({ name: value });
  }

  public switchCondition: string = 'A';
}
