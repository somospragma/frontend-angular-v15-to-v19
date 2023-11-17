import { environment } from '@src/environments/environment';

export function browserLangHelper(language: string | undefined): string {
  if (!language) {
    return environment.DEFAULT_LANGUAGE;
  }
  return environment.LIST_LANGUAGES.includes(language) ? language : environment.DEFAULT_LANGUAGE;
}
