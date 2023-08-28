import { Component } from '@angular/core';
import { CdkDragDrop,moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ToDo } from 'src/app/models/todo.model';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {

  todos: ToDo[] = [
    {
      id: '5',
      tittle: 'Lavar los platos'
    },
    {
      id: '2',
      tittle: 'Comprar un pc'
    }
  ]

  doing: ToDo[] = [
    {
      id: '3',
      tittle: 'Ver un video de platzi'
    },
    {
      id: '4',
      tittle: 'Terminar el board'
    }
  ]

  done: ToDo[] = [
    {
      id: '5',
      tittle: 'Limpiaar pc '
    }
  ]

  drop($event: CdkDragDrop<ToDo[]>){
    console.log($event)
    if( $event.previousContainer === $event.container){
      moveItemInArray<ToDo>($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      )
    }
  }
}
