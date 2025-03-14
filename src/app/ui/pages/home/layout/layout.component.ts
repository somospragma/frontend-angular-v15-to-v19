import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Componente para el layout de la aplicación
 * @export
 * @class LayoutComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-layout',
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
