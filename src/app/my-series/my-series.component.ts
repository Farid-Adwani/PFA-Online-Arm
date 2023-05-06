import { Component } from '@angular/core';
import { Serie } from './serie';
import { Move } from './move';

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
  public tempName : string = "My Serie";

  public tempSerie : Serie= new Serie();
  public tempMove : Move = new Move();
  public tempDate : Date = new Date();




  

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
    

  }
  setSaving(state:boolean){
    this.saving=state;
    if(!state){
      this.delaying=false;
      this.moving=false;
      this.tempSerie=new Serie();
    }
  }

  toggleMoving(){
    this.moving=!this.moving;
    if(this.delaying){
     this.createDelay();
    }
    this.delaying=false;
    if(!this.moving){
      this.createMove()
    }

  }

  toggleDelaying(){
    this.delaying=!this.delaying;
    if(this.moving){
       this.createMove()
      }
    this.moving=false;


    if(!this.delaying){
      this.createDelay();
    }else{
      this.tempDate=new Date();

    }
  }

  setSerie(){
    

    if(this.delaying){
     this.createDelay()
    }

    if(this.moving){
      this.createMove();
    }

    this.tempSerie.color=this.getRandomColor();

    this.series.push(Object.assign({}, this.tempSerie));
    this.setSaving(false);
  }

  updateName(){
    console.log(this.tempSerie)
  }

  debugSerie(selected:Serie){
    console.log(selected)
  }

  createDelay(){
    this.tempMove.base=0;
    this.tempMove.axis1=0;
    this.tempMove.axis2=0;
    this.tempMove.rotation=0;
    this.tempMove.up_down=0;
    this.tempMove.gripper=0;
    this.tempMove.delay=1000;

    this.tempMove.delay=new Date().getTime() - this.tempDate.getTime() ;


    this.tempSerie.moves.push(Object.assign({}, this.tempMove));

  }

  createMove(){
    
    this.tempMove.base=1;
      this.tempMove.axis1=2;
      this.tempMove.axis2=3;
      this.tempMove.rotation=4;
      this.tempMove.up_down=5;
      this.tempMove.gripper=6;
      this.tempMove.delay=0;


      this.tempSerie.moves.push(Object.assign({}, this.tempMove));

  }
  getDelayText(){
    if(this.delaying){
      return (new Date().getTime() - this.tempDate.getTime()).toString();
    }else{
      return "Delay"
    }
  }

}
