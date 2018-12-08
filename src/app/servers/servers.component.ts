import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private hide = true;
  private serverCreationStatus = 'No server created';
  private serverName = '';

  constructor() {
    setTimeout(() => {
      this.hide = false;
    }, 7000);
  }

  ngOnInit() {
  }

  createServer() {
    if (this.serverCreationStatus === 'No server created') {
      this.serverCreationStatus = ' Server created ';
    } else {
      this.serverCreationStatus = 'No server created';
    }
  }

  UpdateServerName(event: any) {
    // console.log(event);
    this.serverName = event.target.value;
  }
}
