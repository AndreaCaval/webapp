import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NewAnagraficComponent } from './new-anagrafic/new-anagrafic.component';
import { EditAnagraficComponent } from './edit-anagrafic/edit-anagrafic.component';
import { TableAnagraficComponent } from './table-anagrafic/table-anagrafic.component';
import { SingleAnagraficComponent } from './single-anagrafic/single-anagrafic.component';
import { InputAnagraficComponent } from './input-anagrafic/input-anagrafic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewAnagraficComponent,
    EditAnagraficComponent,
    TableAnagraficComponent,
    SingleAnagraficComponent,
    InputAnagraficComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
