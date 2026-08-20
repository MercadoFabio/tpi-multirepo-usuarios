import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Usuario {
  readonly id: number;
  readonly nombre: string;
  readonly rol: string;
}

const USUARIOS: readonly Usuario[] = [
  { id: 1, nombre: 'Ana García', rol: 'Administradora' },
  { id: 2, nombre: 'Bruno Pérez', rol: 'Docente' },
  { id: 3, nombre: 'Carla López', rol: 'Estudiante' },
];

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <p class="eyebrow">tpi-multirepo-usuarios</p>
      <h1>Usuarios</h1>
      <p>Esta pantalla vive en su propio repositorio y contenedor Docker.</p>
      <ul>
        @for (usuario of usuarios; track usuario.id) {
          <li><a [href]="'/usuarios/' + usuario.id"><strong>{{ usuario.nombre }}</strong><span>{{ usuario.rol }}</span></a></li>
        }
      </ul>
      <a class="back" href="/">Volver al Shell</a>
    </main>
  `,
  styles: `
    main { margin: auto; max-inline-size: 55rem; padding: 3rem 2rem; }
    .eyebrow { color: #15803d; font-size: .8rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
    ul { display: grid; gap: .75rem; list-style: none; padding: 0; }
    li a { align-items: center; background: white; border: 1px solid #bbf7d0; border-radius: .5rem; color: inherit; display: flex; justify-content: space-between; padding: 1rem; text-decoration: none; }
    li a:hover { border-color: #16a34a; }
    span { color: #475569; }
    .back { color: #166534; display: inline-block; margin-block-start: 1rem; }
  `,
})
export class UsuariosHomePage {
  readonly usuarios = USUARIOS;
}
