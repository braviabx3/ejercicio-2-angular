import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombresComponent } from './componets/nombres/nombres.component';
import { HeaderComponent } from './componets/header/header.component';
import { NombreComponent } from './componets/nombre/nombre.component';

@NgModule({
  declarations: [
    AppComponent,
    NombresComponent,
    HeaderComponent,
    NombreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
