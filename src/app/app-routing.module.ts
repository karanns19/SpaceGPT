import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AerospaceComponent } from './aerospace/aerospace.component';

const routes: Routes = [
  {path:'', component:AerospaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
