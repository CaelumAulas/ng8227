import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = {
    url: '',
    titulo: 'valor velho',
    descricao: ''
  }

  constructor() { }

  ngOnInit() {}

  salvar(){
    console.log(this.foto)
  }

}
