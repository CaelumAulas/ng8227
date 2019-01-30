import { Component, Input } from "@angular/core";

@Component({
  selector: 'cp-card',
  templateUrl: 'card.component.html'
})
export class CardComponent{

  @Input() fotoObjeto

}
