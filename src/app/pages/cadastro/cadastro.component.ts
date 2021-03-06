import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Foto } from 'src/app/models/foto';
import { FotoService } from 'src/app/services/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cp-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto = new Foto();
  mensagem = '';

  titulo = new FormControl('', [Validators.required, Validators.minLength(5)]);

  url = new FormControl('', Validators.required);

  formCadastro = new FormGroup({
    titulo: this.titulo,
    url: this.url,
    descricao: new FormControl('')
  })

  constructor(private servico: FotoService,
              private rotaAtiva: ActivatedRoute,
              private roteador: Router) {}

  ngOnInit() {
    const fotoId = this.rotaAtiva.snapshot.params.fotoId;
    if(fotoId){
      this.servico
          .buscar(fotoId)
          .subscribe(
            fotoApi => {
              this.foto = fotoApi;
              this.formCadastro.patchValue(fotoApi);
            }
            , erro => console.log(erro)
          )
    }
  }

  salvar(){

    this.foto = {...this.foto, ...this.formCadastro.value}

    if(this.foto._id){
      this.servico
          .editar(this.foto)
          .subscribe(
            () => {
              this.mensagem = `Foto ${this.foto.titulo} alterada com sucesso!!`;

              setTimeout(() => {
                this.roteador.navigate([''])
                this.mensagem = '';
              }, 3000)

            }
            , erro => console.log(erro)
          )
    }
    else {
      this.servico
          .cadastrar(this.foto)
          .subscribe(
            () => {
              this.mensagem = `Foto ${this.foto.titulo} cadastrada com sucesso!!`;
              this.formCadastro.reset()
              this.foto = new Foto();

              setTimeout(() => {
                this.mensagem = '';
              }, 3000)

            }
            , erro => console.log(erro)
          )
    }

  }

}
