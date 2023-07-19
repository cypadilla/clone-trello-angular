import { Component } from '@angular/core';
import { faWaveSquare, faBox, faClock} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  public faTrello = faTrello;
  public faWaveSquare = faWaveSquare;
  public faClock = faClock;
  public faBox = faBox;

}
