import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Foto } from 'src/app/models/foto';

@Component({
  selector: 'cp-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new Foto();
  mensagem = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  salvar(formCadastro: NgForm){

    this.http
        .post(
          'http://localhost:3000/v1/fotos',
          this.foto
        )
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
