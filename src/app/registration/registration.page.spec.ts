import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular';
import { RegistrationPage } from './registration.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('RegistrationPage', () => {
  let component: RegistrationPage;
  let fixture: ComponentFixture<RegistrationPage>;
  let router: Router;
  let alertController: jasmine.SpyObj<AlertController>;

  beforeEach(async () => {
    const spyAlertController = jasmine.createSpyObj('AlertController', ['create']);

    await TestBed.configureTestingModule({
      declarations: [ RegistrationPage ],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: AlertController, useValue: spyAlertController },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    alertController = TestBed.inject(AlertController) as jasmine.SpyObj<AlertController>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an alert when the form is invalid and bottonCrearUsuario() is called', async () => {
    spyOn(component, 'presentAlert').and.stub();
    component.userRegisterModal = {
      nombre: '',
      apellido: '',
      usuario: 'fcocollado',
      email: '',
      password: ''
    };
    await component.bottonCrearUsuario();
    expect(component.presentAlert).toHaveBeenCalledWith('Error', 'Por favor, completa todos los campos correctamente.');
  });

  it('should show an alert with success message and navigate on successful registration', async () => {
    const alertSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);
    alertController.create.and.returnValue(Promise.resolve(alertSpy));

    spyOn(component, 'presentAlert').and.callFake(async (header: string, message: string) => {
      await alertSpy.present();
    });
    spyOn(router, 'navigate');

    component.userRegisterModal = {
      nombre: 'John',
      apellido: 'Doe',
      usuario: 'fcocollado',
      email: 'john.doe@example.com',
      password: 'password123'
    };

    await component.bottonCrearUsuario();

    expect(component.presentAlert).toHaveBeenCalledWith('Registro Exitoso', '¡Usuario creado con éxito!');
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should show an alert with error message on registration failure', async () => {
    const alertSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);
    alertController.create.and.returnValue(Promise.resolve(alertSpy));
    spyOn(component, 'presentAlert').and.callFake(async (header: string, message: string) => {
      await alertSpy.present();
    });

    // Simulate error
    spyOn(console, 'error').and.callThrough();

    component.userRegisterModal = {
      nombre: 'John',
      apellido: 'Doe',
      usuario: 'fcocollado',
      email: 'john.doe@example.com',
      password: 'password123'
    };

    await component.bottonCrearUsuario();

    expect(component.presentAlert).toHaveBeenCalledWith('Error', 'Por favor, completa todos los campos correctamente.');
  });

  it('should call presentAlert on validation error', async () => {
    spyOn(component, 'presentAlert').and.stub();
    component.userRegisterModal = {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      usuario:''
    };
    await component.bottonCrearUsuario();
    expect(component.presentAlert).toHaveBeenCalledWith('Error', 'Por favor, completa todos los campos correctamente.');
  });
});
