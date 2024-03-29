import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstudianteComponent } from './agregar-estudiante.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosService } from '../../services/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CursosModule } from '../../cursos.module';
import { empty } from 'rxjs';

describe('AgregarEstudianteComponent', () => {
  let component: AgregarEstudianteComponent;
  let fixture: ComponentFixture<AgregarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEstudianteComponent],
      providers: [CursosService],
      imports: [
        CursosModule,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario no puede quedar vacio', () => {
    const formulario = component.formulario;
    const correo = formulario.controls['correo'];

    correo.setValue('nada');


    expect(formulario.valid).toBeTrue();
  });
});
