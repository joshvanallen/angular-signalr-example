import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
    providedIn: 'root'
})
export class SignalRService {
    private hubConnection: HubConnection = null;

    startConnection() {
        this.hubConnection = new HubConnectionBuilder().withUrl('/services/hub').build();
        
        this.hubConnection.start().then(()=> this.hubConnection.send('send')).catch(()=>console.log('Failed!'));
    }

    public addTransferChartDataListener(){
        this.hubConnection.on('sync', (data) => {
          console.log(data);
        });
      }
}