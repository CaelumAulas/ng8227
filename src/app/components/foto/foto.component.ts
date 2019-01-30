import { Component, Input } from "@angular/core";

@Component({
  selector: 'cp-foto',
  templateUrl: './foto.component.html',
  styles: [``]
})
export class FotoComponent{
  @Input() url;
  @Input() titulo;
  @Input() estilos;
}
