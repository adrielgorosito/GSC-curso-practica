import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { DosComponent } from './dos/dos.component';
import { UnoComponent } from './uno/uno.component';
import { guardaUnoGuard } from './guarda-uno.guard';
import { guardaDosGuard } from './guarda-dos.guard';

const rutas: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  {
    path: 'test',
    component: TestComponent,
    children: [
      { path: 'uno', component: UnoComponent, canDeactivate: [guardaDosGuard] },
      { path: 'dos', component: DosComponent, canActivate: [guardaUnoGuard] },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class RoutingModule {}
