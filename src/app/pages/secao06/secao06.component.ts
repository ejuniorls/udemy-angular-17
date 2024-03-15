import { Component } from '@angular/core';
import { TemplateBindingComponent } from '../../components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from '../../components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-secao06',
  standalone: true,
  imports: [TemplateBindingComponent, TemplateVariablesComponent],
  templateUrl: './secao06.component.html',
  styleUrl: './secao06.component.scss'
})
export class Secao06Component {
  public name: string = 'Fulano de Tal';
  public isDisable: boolean = true;
  public imgSrc: string = 'data:image/jpeg;base64,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';
  public imgAlt: string = 'gatinho triste';

  constructor() {
    setTimeout(() => {
      this.name = 'João e Maria';
    });
  }

}
