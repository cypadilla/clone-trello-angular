import { Component } from '@angular/core';
import { CdkDragDrop,moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column, ToDo } from 'src/app/models/todo.model';
import { Title } from '@angular/platform-browser';
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

  public showInput: boolean = false;
  public showInputToDo: number | undefined;
  public nameNewColumn: string = "";
  public nameNewToDo: string = "";

  columns: Column[] =  [
    {
      title: 'ToDo',
      todos: [
        {
          id: '5',
          tittle: 'Lavar los platos'
        },
        {
          id: '2',
          tittle: 'Comprar un pc'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          tittle: 'Ver un video de platzi'
        },
        {
          id: '4',
          tittle: 'Terminar el board'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '5',
          tittle: 'Limpiaar pc '
        }
      ]
    }
  ];

  todos: ToDo[] = [];

  doing: ToDo[] = [];

  done: ToDo[] = [];

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

  dropColumn($event: CdkDragDrop<Column[]>){
    moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
  }
  showInputAddColumns() {
    this.showInput = !this.showInput
  }

  showInputAddToDo(index: number){
    this.showInputToDo = index
  }
  addColumn(){
    this.columns.push({
      title: this.nameNewColumn,
      todos: []
    })

    this.showInputAddColumns();
    this.nameNewColumn = "";
  }

  addToDo(column:Column){
    column.todos.push({
      id:'6',
      tittle:this.nameNewToDo
    });
    this.nameNewToDo = ""
    this.showInputToDo = undefined;
    console.log(this.nameNewToDo,column);
  }
}
