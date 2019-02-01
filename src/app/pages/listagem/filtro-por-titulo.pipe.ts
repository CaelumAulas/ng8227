import { Pipe, PipeTransform } from '@angular/core';
import { Foto } from 'src/app/models/foto';

@Pipe({
  name: 'filtroPorTitulo'
})
export class FiltroPorTituloPipe implements PipeTransform{

    transform(listaDeFotos: Foto[], termoFiltro: string){

      return listaDeFotos = listaDeFotos.filter(foto => foto.titulo.toLowerCase().includes(termoFiltro.toLowerCase()))

    }

}
