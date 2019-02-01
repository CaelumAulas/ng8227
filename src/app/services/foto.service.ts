import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from '../models/foto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private url = 'http://localhost:3000/v1/fotos/';


  constructor(private http: HttpClient){}

  listar(): Observable<Foto[]> {
    return this.http.get<Foto[]>(this.url)
  }

  cadastrar(foto: Foto): Observable<Object> {
    return this.http.post(this.url,foto, {

    })
  }

  deletar(fotoId: string): Observable<Object> {
    return this.http.delete(this.url+fotoId)
  }

  buscar(fotoId: string): Observable<Foto> {
    return this.http.get<Foto>(this.url+fotoId)
  }

  editar(foto: Foto): Observable<Object> {
    return this.http.put(this.url+foto._id, foto)
  }

}
