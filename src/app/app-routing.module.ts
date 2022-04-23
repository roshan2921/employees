import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmphomeComponent } from './emphome/emphome.component';

const routes: Routes = [
  {path:'',component:EmphomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
