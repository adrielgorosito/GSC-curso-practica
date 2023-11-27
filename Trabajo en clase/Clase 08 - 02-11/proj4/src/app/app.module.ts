import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ReactivoComponent } from './reactivo/reactivo.component';

@NgModule({
  declarations: [AppComponent, PlantillaComponent, ReactivoComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
