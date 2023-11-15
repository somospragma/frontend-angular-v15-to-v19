import { environment } from "@src/environments/environment";
import { browserLangHelper } from "./browserLang.helper";

describe('browserLangHelper', () => {
  test('should return the default language when no language is provided', () => {
    const result = browserLangHelper(undefined);
    expect(result).toEqual(environment.DEFAULT_LANGUAGE);
  });

  test('should return the provided language when it is included in the list of supported languages', () => {
    const result = browserLangHelper('es');
    expect(result).toEqual('es');
  });

  test('should return the default language when the provided language is not included in the list of supported languages', () => {
    const result = browserLangHelper('fr');
    expect(result).toEqual(environment.DEFAULT_LANGUAGE);
  });
});
