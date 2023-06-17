import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { ShareModule } from './share/share.module';


//IMPLEMENTACION PARA LOS IDIMOMAS LOCALES
import localeEsHN from "@angular/common/locales/es-HN";
import localeFrCA from "@angular/common/locales/fr-CA";

import {registerLocaleData} from "@angular/common";
registerLocaleData(localeEsHN)
registerLocaleData(localeFrCA)

////////////////////////////////////////////////////////////////////

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ShareModule
  ],
  //COLOCAR EL IDIOMA POR DEFECTO ESPA;OL HONDURAS
  
  providers: [{
    provide:LOCALE_ID,useValue:'es-HN'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
