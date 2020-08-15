import { Component } from '@angular/core';
import { SignalRService } from './signalr.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signalr-example';
  constructor(private signalRService: SignalRService){

  }
  ngOnInit(){
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
  }
}
