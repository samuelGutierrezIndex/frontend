import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 public myName:string = 'Samuel Gutierrez';


 onSayHello(message: any)
 {
  console.log(message);
 }
}
