import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { WebSocketService } from '../services/web-socket.service';
import { Subscription } from 'rxjs';
import { Tuning } from '../model-tuning/Tuning';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit, OnDestroy {
  @Input() public params:Tuning = new Tuning(1,1,0.8,0.8,false); 

  public fps: number = 0;
  @Input() public joint: string = "stop"


  private ttsSubscription!: Subscription;
  public tts: number = 0;
  constructor(private wsService: WebSocketService) { }
  ngOnInit(): void {
    this.ttsSubscription = this.wsService.tts$.subscribe(tts => {
      this.tts = tts;
    });

   

  }

  onDataReceived(fps: number) {
    this.fps = fps;
  }
  ngOnDestroy(): void {
    this.ttsSubscription.unsubscribe();
  }
}