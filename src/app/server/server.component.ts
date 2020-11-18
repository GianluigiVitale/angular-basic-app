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
    servers = ['Test Server', 'Test Server2']

    display = true;
	clicks = [];

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
        this.servers.push(this.serverName);
        this.serverCreationStatus = `Server was created ${this.serverName}`;
    }

    getColor() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }

    toggleParagraph() {
		this.clicks.push(this.clicks.length + 1);
		this.display = !this.display;

		return this.display;
	}

	backgroundCheck(click) {
		return click >= 5 ? 'lightblue' : 'white';
	}

    // onUpdateServerName(event: any) {
    //     this.serverName = event.target.value;
    // }
}