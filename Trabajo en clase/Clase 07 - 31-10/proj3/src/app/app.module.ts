import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoutingModule } from './routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, PageNotFoundComponent, TestComponent, UnoComponent, DosComponent],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
