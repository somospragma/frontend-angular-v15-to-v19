import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { environment } from '@src/environments/environment';

import { browserLangHelper } from '@app/shared/helpers/browserLang.helper';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Componente para el layout de la aplicación
 * @export
 * @class LayoutComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-layout',
  imports: [CommonModule, TranslateModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  /**
   * Inyectamos el servicio de traducción de ngx-translate
   * @type {TranslateService}
   * @memberof LayoutComponent
   */
  translate: TranslateService = inject(TranslateService);

  /**
   * Parámetros para el título de la página
   * @type {any} // TODO: Definir tipo
   * @memberof LayoutComponent
   */
  titleParams: any = { pragmatico: 'pragmatico' };

  /**
   * Idioma en uso
   * @type {string}
   * @memberof LayoutComponent
   */
  languageInUse: string = this.translate.currentLang;

  /**
   * Creates an instance of LayoutComponent.
   * @memberof LayoutComponent
   * @returns {void}
   */
  constructor() {
    this.translate.setDefaultLang(environment.DEFAULT_LANGUAGE);
    this.translate.addLangs(environment.LIST_LANGUAGES.split(','));
  }
  /**
   * Metodo que se ejecuta al iniciar el componente
   * @memberof LayoutComponent
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageInUse = browserLangHelper(this.translate.getBrowserLang());
    this.translate.use(this.languageInUse);
  }
}
