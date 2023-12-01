import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SuscripcionService } from '../suscripcion.service';
import { Suscripcion } from '../suscripcion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  constructor(private fb: FormBuilder, private ss: SuscripcionService) {}
  error: boolean = false;

  registroForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    apellido: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    email: [
      '',
      [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)],
    ],
    emailConfirm: [
      '',
      [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)],
    ],
    telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    password: ['', Validators.required],
    notificaciones: [true],
    terminos: [false, Validators.required],
  });

  checkForm() {
    if (
      this.registroForm.get('nombre')!.value === '' ||
      this.registroForm.get('apellido')!.value === '' ||
      this.registroForm.get('email')!.value === '' ||
      this.registroForm.get('emailConfirm')!.value === '' ||
      this.registroForm.get('password')!.value === '' ||
      this.registroForm.get('terminos')!.value === false
    )
      return false;

    if (
      this.registroForm.get('email')!.value !==
      this.registroForm.get('emailConfirm')!.value
    )
      return false;

    if (
      this.registroForm.get('telefono')!.value === null ||
      isNaN(Number(this.registroForm.get('telefono')!.value))
    )
      return false;

    return true;
  }

  submit() {
    if (!this.checkForm() || this.registroForm.invalid) this.error = true;

    this.error = false;

    const s = new Suscripcion(
      this.registroForm.get('nombre')!.value!,
      this.registroForm.get('apellido')!.value!,
      this.registroForm.get('email')!.value!,
      Number(this.registroForm.get('telefono')!.value!),
      this.registroForm.get('password')!.value!,
      this.registroForm.get('notificaciones')!.value!
    );

    const observer = {
      next: () =>
        console.log(
          'Suscripción creada. Datos:\nNombre:',
          s.nombre,
          '\nApellido:',
          s.apellido,
          '\nEmail:',
          s.email,
          '\nContraseña:',
          s.password,
          '\nTeléfono:',
          s.telefono,
          '\nNotificaciones:',
          s.notificaciones ? 'Si' : 'No'
        ),
      error: () => console.log('Error'),
    };

    this.ss.crearSuscripcion(s).subscribe(observer);
  }
}
