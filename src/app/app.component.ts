import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h3 {
      color: aquamarine;
    }`
  ]
})
export class AppComponent {
  name = '';
}
