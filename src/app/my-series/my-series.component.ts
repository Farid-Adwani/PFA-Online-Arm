import { Component } from '@angular/core';
import { Serie } from './serie';

@Component({
  selector: 'app-my-series',
  templateUrl: './my-series.component.html',
  styleUrls: ['./my-series.component.css']
})
export class MySeriesComponent {
  public series : Serie[]= [];
  public saving : boolean= false;
  public moving : boolean= false;
  public delaying : boolean= false;


  

  getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  ngOnInit(){
    this.series.push(new Serie("Serie1",new Date,false,this.getRandomColor(),[]));
    this.series.push(new Serie("Serie2",new Date,false,this.getRandomColor(),[]));
    this.series.push(new Serie("Serie3",new Date,false,this.getRandomColor(),[]));
    this.series.push(new Serie("Serie4",new Date,false,this.getRandomColor(),[]));

  }

  playSerie(index:number){
    this.series[index].playing=true;
  }

  endSerie(index:number){
    this.series[index].playing=false;
    this.delaying=false;
    this.moving=false;

  }
  setSaving(state:boolean){
    this.saving=state;
    if(!state){
      this.delaying=false;
      this.moving=false;
    }
  }

  toggleMoving(){
    this.moving=!this.moving;
    this.delaying=false;

  }

  toggleDelaying(){
    this.delaying=!this.delaying;
    this.moving=false;
  }

  setSerie(){
    this.setSaving(false);
  }
}
