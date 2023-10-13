import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importar o módulo 'NgApexchartsModule'
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
