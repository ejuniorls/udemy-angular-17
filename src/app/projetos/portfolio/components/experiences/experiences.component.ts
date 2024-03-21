import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Est ad irure ipsum et.',
        p: 'LoremEst nulla adipisicing irure do fugiat laboris culpa. Nisi deserunt dolor consectetur sunt labore in consectetur officia eiusmod. Sunt commodo deserunt excepteur duis aliquip labore commodo ea labore tempor consectetur irure dolore. Nisi ipsum consectetur ipsum consectetur est amet veniam culpa deserunt ea consectetur magna. Qui qui ea occaecat duis exercitation ex cupidatat mollit voluptate adipisicing non dolor commodo sint.'
      },
      text: 'Incididunt velit aliqua nulla qui fugiat fugiat ullamco aute quis ex sint dolore eu mollit. Elit non ex duis sit laboris commodo enim officia quis pariatur duis cupidatat in. Duis elit qui deserunt nulla sit consectetur duis officia. Id ea duis eiusmod aute sit ex adipisicing aliquip exercitation non proident reprehenderit. Lorem consequat officia ut laboris. Pariatur nisi nulla Lorem magna irure duis sint esse proident. Aliquip adipisicing consequat reprehenderit mollit. Laboris mollit dolor exercitation nostrud eiusmod est anim sint.',
    },
    {
      summary: {
        strong: 'Est ad irure ipsum et.',
        p: 'LoremEst nulla adipisicing irure do fugiat laboris culpa. Nisi deserunt dolor consectetur sunt labore in consectetur officia eiusmod. Sunt commodo deserunt excepteur duis aliquip labore commodo ea labore tempor consectetur irure dolore. Nisi ipsum consectetur ipsum consectetur est amet veniam culpa deserunt ea consectetur magna. Qui qui ea occaecat duis exercitation ex cupidatat mollit voluptate adipisicing non dolor commodo sint.'
      },
      text: 'Incididunt velit aliqua nulla qui fugiat fugiat ullamco aute quis ex sint dolore eu mollit. Elit non ex duis sit laboris commodo enim officia quis pariatur duis cupidatat in. Duis elit qui deserunt nulla sit consectetur duis officia. Id ea duis eiusmod aute sit ex adipisicing aliquip exercitation non proident reprehenderit. Lorem consequat officia ut laboris. Pariatur nisi nulla Lorem magna irure duis sint esse proident. Aliquip adipisicing consequat reprehenderit mollit. Laboris mollit dolor exercitation nostrud eiusmod est anim sint.',
    },
    {
      summary: {
        strong: 'Est ad irure ipsum et.',
        p: 'LoremEst nulla adipisicing irure do fugiat laboris culpa. Nisi deserunt dolor consectetur sunt labore in consectetur officia eiusmod. Sunt commodo deserunt excepteur duis aliquip labore commodo ea labore tempor consectetur irure dolore. Nisi ipsum consectetur ipsum consectetur est amet veniam culpa deserunt ea consectetur magna. Qui qui ea occaecat duis exercitation ex cupidatat mollit voluptate adipisicing non dolor commodo sint.'
      },
      text: 'Incididunt velit aliqua nulla qui fugiat fugiat ullamco aute quis ex sint dolore eu mollit. Elit non ex duis sit laboris commodo enim officia quis pariatur duis cupidatat in. Duis elit qui deserunt nulla sit consectetur duis officia. Id ea duis eiusmod aute sit ex adipisicing aliquip exercitation non proident reprehenderit. Lorem consequat officia ut laboris. Pariatur nisi nulla Lorem magna irure duis sint esse proident. Aliquip adipisicing consequat reprehenderit mollit. Laboris mollit dolor exercitation nostrud eiusmod est anim sint.',
    },
    {
      summary: {
        strong: 'Est ad irure ipsum et.',
        p: 'LoremEst nulla adipisicing irure do fugiat laboris culpa. Nisi deserunt dolor consectetur sunt labore in consectetur officia eiusmod. Sunt commodo deserunt excepteur duis aliquip labore commodo ea labore tempor consectetur irure dolore. Nisi ipsum consectetur ipsum consectetur est amet veniam culpa deserunt ea consectetur magna. Qui qui ea occaecat duis exercitation ex cupidatat mollit voluptate adipisicing non dolor commodo sint.'
      },
      text: 'Incididunt velit aliqua nulla qui fugiat fugiat ullamco aute quis ex sint dolore eu mollit. Elit non ex duis sit laboris commodo enim officia quis pariatur duis cupidatat in. Duis elit qui deserunt nulla sit consectetur duis officia. Id ea duis eiusmod aute sit ex adipisicing aliquip exercitation non proident reprehenderit. Lorem consequat officia ut laboris. Pariatur nisi nulla Lorem magna irure duis sint esse proident. Aliquip adipisicing consequat reprehenderit mollit. Laboris mollit dolor exercitation nostrud eiusmod est anim sint.',
    },
    {
      summary: {
        strong: 'Est ad irure ipsum et.',
        p: 'LoremEst nulla adipisicing irure do fugiat laboris culpa. Nisi deserunt dolor consectetur sunt labore in consectetur officia eiusmod. Sunt commodo deserunt excepteur duis aliquip labore commodo ea labore tempor consectetur irure dolore. Nisi ipsum consectetur ipsum consectetur est amet veniam culpa deserunt ea consectetur magna. Qui qui ea occaecat duis exercitation ex cupidatat mollit voluptate adipisicing non dolor commodo sint.'
      },
      text: 'Incididunt velit aliqua nulla qui fugiat fugiat ullamco aute quis ex sint dolore eu mollit. Elit non ex duis sit laboris commodo enim officia quis pariatur duis cupidatat in. Duis elit qui deserunt nulla sit consectetur duis officia. Id ea duis eiusmod aute sit ex adipisicing aliquip exercitation non proident reprehenderit. Lorem consequat officia ut laboris. Pariatur nisi nulla Lorem magna irure duis sint esse proident. Aliquip adipisicing consequat reprehenderit mollit. Laboris mollit dolor exercitation nostrud eiusmod est anim sint.',
    },
  ]);
}
