import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'primary';

  ngOnInit(): void {

  }

  get colors(){
    return {
      'bg-success-700' : this.color === 'success',
      'hover:bg-success-900' : this.color === 'success',
      'focus:ring-success-300' : this.color === 'success',
      'bg-primary-700' : this.color === 'primary',
      'hover:bg-primary-900' : this.color === 'primary',
      'focus:ring-primary-300' : this.color === 'primary',
      'bg-red-700' : this.color === 'red',
      'hover:bg-red-900' : this.color === 'red',
      'focus:ring-red-300' : this.color === 'red'
    }
  }
}
