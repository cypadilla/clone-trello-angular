import { Component } from '@angular/core';
import { faWaveSquare, faBox, faClock, faAngleUp,faAngleDown,faHeart,faBorderAll,faUsers,faGear} from '@fortawesome/free-solid-svg-icons';
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
  public faAngleUp = faAngleUp;
  public faAngleDown = faAngleDown;
  public faHeart = faHeart;
  public faBorderAll = faBorderAll;
  public faUsers = faUsers;
  public faGear = faGear;

  items = [
    {
      label:'Item 1',
      items: [
        {
          label: 'Sub item 1.1',
        },
        {
          label: 'Sub item 1.2',
        },
        {
          label: 'Sub item 1.3',
        }
      ]
    },
    {
      label:'Item 2',
      items: [
        {
          label: 'Sub item 2.1',
        },
        {
          label: 'Sub item 2.2',
        },
        {
          label: 'Sub item 2.3',
        }
      ]
    },
    {
      label:'Item 3',
      items: [
        {
          label: 'Sub item 3.1',
        },
        {
          label: 'Sub item 3.2',
        }
      ]
    }
  ];
  expandedIndex = 0;

}
