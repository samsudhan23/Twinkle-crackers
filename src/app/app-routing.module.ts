import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrackersListComponent } from './components/crackers-list/crackers-list.component';

const routes: Routes = [
  { path: '', component: CrackersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
