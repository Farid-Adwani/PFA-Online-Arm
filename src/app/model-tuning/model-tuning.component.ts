import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Tuning } from './Tuning';

@Component({
  selector: 'app-model-tuning',
  templateUrl: './model-tuning.component.html',
  styleUrls: ['./model-tuning.component.css']
})
export class ModelTuningComponent {
  @Input() public maxNumHands: number = 1;
  @Input() public modelComplexity: number = 1;
  @Input() public minDetectionConfidence: number = 0.8;
  @Input() public minTrackingConfidence: number = 0.8;
  @Input() public selfieMode: boolean = false;
  @Output() itemEvent = new EventEmitter<Tuning>();

  constructor(){
    

  }

  sendParams(){
    const tuning = new Tuning(
      this.maxNumHands,
      this.modelComplexity,
      this.minDetectionConfidence,
      this.minTrackingConfidence,
      this.selfieMode
    );
    this.itemEvent.emit(tuning);
  }
}
