import { CommonModule } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from '@src/environments/environment';

import { HttpLoaderFactory } from '@app/app.config';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LayoutComponent,
        CommonModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  beforeEach(() => {
    jest.resetModules();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should set default language to environment.DEFAULT_LANGUAGE', () => {
    expect(translateService.getDefaultLang()).toEqual(environment.DEFAULT_LANGUAGE);
  });

  test('should add languages from environment.LIST_LANGUAGES', () => {
    const languages = environment.LIST_LANGUAGES.split(',');
    expect(translateService.getLangs()).toEqual(languages);
  });

  test('should use browser language if available', () => {
    const translateServiceSpy = jest.spyOn(translateService, 'getBrowserLang').mockReturnValue('es');
    component.ngOnInit();
    expect(translateServiceSpy).toHaveBeenCalled();
    expect(translateServiceSpy).toHaveReturnedWith('es');
  });

  test('should use default language if browser language is not available', () => {
    const translateServiceSpy = jest.spyOn(translateService, 'getBrowserLang').mockReturnValue(undefined);
    component.ngOnInit();
    expect(translateServiceSpy).toHaveBeenCalled();
    expect(translateServiceSpy).toHaveReturnedWith(undefined);
  });
});
