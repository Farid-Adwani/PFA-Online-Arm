import { Component } from '@angular/core';
import { Serie } from './serie';
import { Move } from './move';
import { Subscription } from 'rxjs';
import { OperatorComponent } from '../operator/operator.component';
import { DataSharingService } from '../services/dataSharing.service';

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
  public tempMove : Move = new Move(0,0,0,0,0,0,0);
   
  public tempDate : Date = new Date();
  public subscription: Subscription = new Subscription();
  public playingSerie : Serie= new Serie();
  public search : string = "";
  

  constructor(private dataSharingService: DataSharingService) {

    this.subscription = this.dataSharingService.getData().subscribe(value => {
      if(value.constructor.name=="Move"){
      if (value.base!=0){
        this.tempMove.base=value.base
      }
      if (value.axis1!=0){
        this.tempMove.axis1=value.axis1
      }
      if (value.axis2!=0){
        this.tempMove.axis2=value.axis2
      }
      if (value.rotation!=0){
        this.tempMove.rotation=value.rotation
      }
      if (value.up_down!=0){
        this.tempMove.up_down=value.up_down
      }
      if (value.gripper!=0){
        this.tempMove.gripper=value.gripper
      }
      }
  });

  }

  

  getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  changeSearch(){
    console.log(this.search)
  }

  ngOnInit(){

 

    this.series.push(new Serie("Serie1",new Date,false,this.getRandomColor(),[]));
    this.series.push(new Serie("Serie2",new Date,false,this.getRandomColor(),[]));
    this.series.push(new Serie("Serie3",new Date,false,this.getRandomColor(),[]));
    this.series.push(new Serie("Serie4",new Date,false,this.getRandomColor(),[]));

  }

  playSerie(index:number){
    for (let i = 0; i < this.series.length; i++) {
      this.series[i].playing=false;
      
    }
    this.series[index].playing=true;
    this.playingSerie=this.series[index];
     this.dataSharingService.sendData(this.playingSerie);
  }

  endSerie(index:number){
    this.series[index].playing=false;
    

  }
  setSaving(state:boolean){
    for (let i = 0; i < this.series.length; i++) {
      this.series[i].playing=false;
      
    }
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

    this.series.push(Object.assign(new Serie(), this.tempSerie));
    this.setSaving(false);
  }

  updateName(){
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

    this.tempMove.delay=new Date().getTime() - this.tempDate.getTime() ;


    this.tempSerie.moves.push(Object.assign(new Move(), this.tempMove));

  }

  createMove(){
    
      this.tempMove.delay=0;
      this.tempSerie.moves.push(Object.assign(new Move(), this.tempMove));

  }
  getDelayText(){
    if(this.delaying){
      return (new Date().getTime() - this.tempDate.getTime()).toString();
    }else{
      return "Delay"
    }
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
