import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId = 15;
    serverStatus = 'offline';
    serverActive = false;
    serverCreationStatus = 'No server was created';
    serverName: string;

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

    onCreateServer() {
        console.log(this.serverName);
        
        this.serverCreationStatus = `Server was created ${this.serverName}`;
    }

    // onUpdateServerName(event: any) {
    //     this.serverName = event.target.value;
    // }
}