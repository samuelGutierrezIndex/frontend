import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Input()
  public name:string = '';

  @Output()
  sayHello: EventEmitter<string> = new EventEmitter<string>();

  public nameList: Array<string> = [];
  public inputName:string = '';

  addName()
  {
    this.nameList.push(this.inputName);
    this.inputName = '';
    console.log(this.nameList);
  }

  OnNameClick()
  {
    this.sayHello.emit('Hola!');
  }

  constructor()
  {
  }
}
