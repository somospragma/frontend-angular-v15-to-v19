import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

describe('AppRoutes', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    jest.resetModules();
  });

  test('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  test('should navigate to home page', async () => {
    await router.navigate(['home']);
    expect(router.url).toBe('/home');
  });
});
