import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <p class="eyebrow">Aplicación Usuarios</p>
      <h1>Detalle de usuario</h1>
      <p>Id recibido desde la ruta: <strong>{{ id }}</strong></p>
      <a href="/usuarios/">Volver al listado</a>
    </main>
  `,
  styles: `main { margin: auto; max-inline-size: 55rem; padding: 3rem 2rem; } .eyebrow { color: #15803d; font-size: .8rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; } a { color: #166534; }`,
})
export class UsuarioDetailPage {
  readonly id = inject(ActivatedRoute).snapshot.paramMap.get('id');
}
