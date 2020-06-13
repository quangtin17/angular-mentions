import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: string[] = [ 'Noah', 'Liam', 'Mason', 'Jacob', ];

title = 'mentions';
}
