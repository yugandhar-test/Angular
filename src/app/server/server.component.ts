import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']

})
export class ServerComponent {

  serverid = 10;
  private _serverStatus = 'online';

  get serverStatus(): string {
    return this._serverStatus;
  }

  getserverStatus(): string {
    return this._serverStatus;
  }
}
