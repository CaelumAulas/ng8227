import { Component, OnInit } from '@angular/core';
import { FotoService } from 'src/app/services/foto.service';
import { Foto } from 'src/app/models/foto';

@Component({
  selector: 'cp-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  titulo = 'CaelumPic';
  listaFotos: Foto[] = [];

  constructor(private servico: FotoService) {}

  ngOnInit() {
    this.servico
        .listar()
        .subscribe(
          fotosApi => {
            this.listaFotos = fotosApi;
          }
          , erro => console.log(erro)
        )

  }

  apagar(fotoId){
    this.servico
        .deletar(fotoId)
        .subscribe(
          () => {
            console.log('apagouuuu '+fotoId);

           this.listaFotos = this
                                .listaFotos
                                .filter(
                                  foto => {
                                    if(foto._id != fotoId){
                                      return foto
                                    }
                                })

          }
        )//fim subscribe
  }

}
