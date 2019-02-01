import { Routes, RouterModule } from "@angular/router";
import { ListagemComponent } from './pages/listagem/listagem.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const rotasApp:Routes = [
  { path: '', component: ListagemComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'editar/:fotoId', component: CadastroComponent },
  { path: '**', redirectTo: '' }
]

export const ModuloRoteamento = RouterModule.forRoot(rotasApp)
