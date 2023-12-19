import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePruebaComponent } from './pipe-prueba/pipe-prueba.component';
import { MiPipePipe } from './mi-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePruebaComponent,
    MiPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
