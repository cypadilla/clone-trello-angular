import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color : 'success'|'primary'| 'danger' | 'light' = 'primary';

  mapColors = {
    success: {
      'bg-success-700' :true,
      'hover:bg-success-900' :true,
      'focus:ring-success-300' :true,
      'text-white': true
    },
    primary: {
      'bg-primary-700' : true,
      'hover:bg-primary-900' : true,
      'focus:ring-primary-300' : true,
      'text-white': true
    },
    danger: {
      'bg-red-700' : true,
      'hover:bg-red-900' : true,
      'focus:ring-red-300' : true,
      'text-white': true
    },
    light: {
      'bg-gray-200' : true,
      'hover:bg-gray-500' : true,
      'focus:ring-gray-50' : true,
      'text-white': true
    }
  }
  ngOnInit(): void {

  }

  get colors(){
    const colors = this.mapColors[this.color];
    if(colors) {
      return colors;
    };
    return {}
  }
}
