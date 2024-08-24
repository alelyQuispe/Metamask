import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Asegúrate de agregar esta línea

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendEthComponent } from './send-eth/send-eth.component';

@NgModule({
  declarations: [
    AppComponent,
    SendEthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Asegúrate de agregar esta línea
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
