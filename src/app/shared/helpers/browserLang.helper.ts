import { environment } from '@src/environments/environment';
/**
 * Función para obtener el idioma del navegador
 * @param {string} language - Idioma del navegador
 * @returns {string} - Idioma del navegador o idioma por defecto
 */
export function browserLangHelper(language: string | undefined): string {
  if (!language) {
    return environment.DEFAULT_LANGUAGE;
  }
  return environment.LIST_LANGUAGES.includes(language) ? language : environment.DEFAULT_LANGUAGE;
}
