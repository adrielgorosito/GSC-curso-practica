import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css'],
})
export class ReactivoComponent {
  favouriteColorControl = new FormControl('');

  nombre = new FormControl('', Validators.required);
  apellido = new FormControl('', Validators.required);

  enviar() {
    console.log(this.registracionForm.value);
  }

  registracionForm = new FormGroup({
    nombre2: new FormControl('', Validators.required),
    apellido2: new FormControl('', Validators.required),
    edad2: new FormControl('', Validators.required),
    address2: new FormGroup({
      calle2: new FormControl('', Validators.required),
      altura2: new FormControl(''),
    }),
  });

  // Otra forma de anidar FormGroups a través de FormBuilder
  constructor(private fb: FormBuilder) {}

  registracionForm3 = this.fb.group({
    nombre3: ['', Validators.required],
    apellido3: ['', Validators.required],
    edad3: ['', Validators.required],
    address3: this.fb.group({
      calle3: ['', Validators.required],
      altura3: ['', Validators.required],
    }),
  });
}
