import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss']
})
export class ServerComponent {
    serverId = 15;
    serverStatus = 'offline';
    serverActive = false;
    serverCreationStatus = 'No server was created';
    serverName: string;
    serverCreated = false;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

        setTimeout(() => {
            this.serverActive = true;
        }, 2000);
    }

    ngOnInit() {

    }

    getServerStatus() {
        return this.serverStatus;
    }

    onCreateServer() {
        this.serverCreated = true;
        console.log(this.serverName);
        
        this.serverCreationStatus = `Server was created ${this.serverName}`;
    }

    getColor() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }

    // onUpdateServerName(event: any) {
    //     this.serverName = event.target.value;
    // }
}