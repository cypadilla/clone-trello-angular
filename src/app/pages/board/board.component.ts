import { Component } from '@angular/core';
import { CdkDragDrop,moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column, ToDo } from 'src/app/models/todo.model';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';

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
  public faPlus = faPlus;
  public faX = faX;

  columns: Column[] =  [
    {
      title: 'ToDo',
      todos: [
        {
          id: '5',
          title: 'Lavar los platos'
        },
        {
          id: '2',
          title: 'Comprar un pc'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Ver un video de platzi'
        },
        {
          id: '4',
          title: 'Terminar el board'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '5',
          title: 'Limpiaar pc '
        }
      ]
    }
  ];

  constructor(
    private dialog:Dialog
  ){}

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
      title:this.nameNewToDo
    });
    this.nameNewToDo = ""
    this.showInputToDo = undefined;
    console.log(this.nameNewToDo,column);
  }

  closeAddToDo(){
    this.showInputToDo = undefined;
  }

  openDialog(todo:ToDo){
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data:{
        todo: todo,
      }
    });
    dialogRef.closed.subscribe( output => {
      console.log(output)
    })
  }
}
