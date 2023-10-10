import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewAnagraficComponent } from './new-anagrafic/new-anagrafic.component';
import { EditAnagraficComponent } from './edit-anagrafic/edit-anagrafic.component';
import { InfoAnagraficComponent } from './info-anagrafic/info-anagrafic.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new', component: NewAnagraficComponent},
  { path: 'edit/:id', component: EditAnagraficComponent},
  { path: 'info/:id', component: InfoAnagraficComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
