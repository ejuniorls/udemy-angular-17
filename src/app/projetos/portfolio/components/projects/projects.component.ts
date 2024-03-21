import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Fullstack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      descrition: '',
      links: [
        {
          name: 'Conseça o blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Fullstack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      descrition: '',
      links: [
        {
          name: 'Conseça o blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Fullstack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      descrition: '',
      links: [
        {
          name: 'Conseça o blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    }
  ]);
}
