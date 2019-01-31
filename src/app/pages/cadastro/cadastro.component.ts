import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Foto } from 'src/app/models/foto';
import { FotoService } from 'src/app/services/foto.service';

@Component({
  selector: 'cp-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new Foto();
  mensagem = '';

  constructor(private servico: FotoService) {}

  ngOnInit() {}

  salvar(formCadastro: NgForm){

    this.servico
        .cadastrar(this.foto)
        .subscribe(
          () => {
            this.mensagem = `Foto ${this.foto.titulo} cadastrada com sucesso!!`;
            formCadastro.reset()
            this.foto = new Foto();

            setTimeout(() => {
              this.mensagem = '';
            }, 3000)

          }
          , erro => console.log(erro)
        )

  }

}
