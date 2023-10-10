import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {NgPipesModule} from 'ngx-pipes';
import {ReversePipe} from 'ngx-pipes';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NewAnagraficComponent } from './new-anagrafic/new-anagrafic.component';
import { EditAnagraficComponent } from './edit-anagrafic/edit-anagrafic.component';
import { InputAnagraficComponent } from './input-anagrafic/input-anagrafic.component';
import { InfoAnagraficComponent } from './info-anagrafic/info-anagrafic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewAnagraficComponent,
    EditAnagraficComponent,
    InputAnagraficComponent,
    InfoAnagraficComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgPipesModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [ReversePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
