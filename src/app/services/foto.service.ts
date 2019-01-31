import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from '../models/foto';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private url = 'http://localhost:3000/v1/fotos/';


  constructor(private http: HttpClient){}

  listar(){
    return this.http.get(this.url)
  }

  cadastrar(foto: Foto){
    return this.http.post(this.url,foto)
  }

  deletar(fotoId: string){
    return this.http.delete(this.url+fotoId)
  }

  editar(){}

  buscar(){}


}
