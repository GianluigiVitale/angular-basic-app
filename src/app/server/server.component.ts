import { Component } from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId = 15;
    serverStatus = 'offline';
    serverActive = false;


    constructor() {
        setTimeout(() => {
            this.serverActive = true;
        }, 2000);
    }

    ngOnInit() {

    }

    getServerStatus() {
        return this.serverStatus;
    }
}