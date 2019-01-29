import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CaelumpicComponentsModule } from './components/caelumpic-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CaelumpicComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
