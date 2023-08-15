class Tv {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;

    constructor(b: string, s: number, r: string, c: string[]) {
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;
    }

    get connections(): string | undefined {
        return this._connectedTo;
    }

    set newConnections(newConnection: string | undefined) {
        if(!newConnection || this._connections.includes(newConnection)) {
            this._connectedTo = newConnection;
        } else { console.log('Sorry, connection unavailable!');
         }
    }

   turnOn():void {
    console.log(
      `TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \n\
available connections: ${this._connections}`,
    );
  }

}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wi-Fi']);
tv1.turnOn();

tv1.newConnections = 'HDMI';
console.log('Connected to: ', tv1.connections);
