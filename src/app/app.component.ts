import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Componente principal de la aplicación
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  imports: [RouterModule],
  standalone: true,
})
export class AppComponent {}
