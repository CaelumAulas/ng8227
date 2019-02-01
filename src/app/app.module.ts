import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CaelumpicComponentsModule } from './components/caelumpic-components.module';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ModuloRoteamento } from './app.routes';
import { FormsModule } from "@angular/forms";
import { FiltroPorTituloPipe } from './pages/listagem/filtro-por-titulo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    FiltroPorTituloPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CaelumpicComponentsModule,
    ModuloRoteamento,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
