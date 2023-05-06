import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketService } from '../services/web-socket.service';
import { Tuning } from '../model-tuning/Tuning';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css',
 
  ],
  // scripts : [],
})
export class HomeComponent implements OnInit, OnDestroy {
  public params:Tuning = new Tuning(1,1,0.8,0.8,false); 
 
  public fps: number = 0;
  public joint: string = "stop"
  public jointImage: string = "../../assets/images/a.png"


  private ttsSubscription!: Subscription;
  public tts: number = 0;

      
  constructor(private wsService: WebSocketService) {

   }

   receiveData(data: Tuning) {
    
    this.params=data;

  }

  ngOnInit(): void {



   
      
   




    this.ttsSubscription = this.wsService.tts$.subscribe(tts => {
      this.tts = tts;
    });

    document.addEventListener("keydown", (event: KeyboardEvent) => {
      console.log(event.code);
      if (event.code === "Digit1") {
        this.jointImage = "../../assets/images/a.png";
        this.joint = "base";

      } else if (event.code === "Digit2") {
        this.jointImage = "../../assets/images/b.png";
        this.joint = "axis1";

      }
      else if (event.code === "Digit3") {
        this.jointImage = "../../assets/images/c.png";
        this.joint = "axis2";

      }
      else if (event.code === "Digit4") {
        this.jointImage = "../../assets/images/d.png";
        this.joint = "rotation";

      }
      else if (event.code === "Digit5") {
        this.jointImage = "../../assets/images/e.png";
        this.joint = "up_down";

      }
      else if (event.code === "Digit6") {
        this.jointImage = "../../assets/images/f.png";
        this.joint = "gripper";

      }
      else {
        this.jointImage = "../../assets/images/pfa.png";
        this.joint = "stop";
      }
    });

  }

  ngAfterViewInit(){
    const scripts =[
      "../../../assets/js/jquery-3.3.1.min.js",
      "../../../assets/js/owl.carousel.js",
      "../../../assets/js/popper.min.js",
      "../../../assets/js/tippy-bundle.iife.min.js",
      "../../../assets/js/bootstrap.js",
      "../../../assets/js/switchery.js",
      "../../../assets/js/easytimer.min.js",
      "../../../assets/js/index.js",
      "../../../assets/js/feather.min.js",
      "../../../assets/js/feather-icon.js",
      "../../../assets/js/ckeditor.js",
      "../../../assets/js/styles.js",
      "../../../assets/js/jquery.js",
      "../../../assets/js/ckeditor.custom.js",
      // "../../../assets/js/datepicker.js",
      // "../../../assets/js/datepicker.en.js",
      // "../../../assets/js/datepicker.custom.js",
      // "../../../assets/js/intro.js",
      // "../../../assets/js/intro-init.js",
      "../../../assets/js/jquery.magnific-popup.js",
      "../../../assets/js/zoom-gallery.js",
      "../../../assets/js/script.js",]
      for (let index = 0; index < scripts.length; index++) {
        var myScriptElement = document.createElement("script");
      myScriptElement.src = scripts[index];
      document.body.appendChild(myScriptElement);
        
      }

       document.addEventListener("keydown", (event: KeyboardEvent) => {
      console.log(event.code);
      if (event.code === "Digit1") {
        this.jointImage = "../../assets/images/a.png";
        this.joint = "base";

      } else if (event.code === "Digit2") {
        this.jointImage = "../../assets/images/b.png";
        this.joint = "axis1";

      }
      else if (event.code === "Digit3") {
        this.jointImage = "../../assets/images/c.png";
        this.joint = "axis2";

      }
      else if (event.code === "Digit4") {
        this.jointImage = "../../assets/images/d.png";
        this.joint = "rotation";

      }
      else if (event.code === "Digit5") {
        this.jointImage = "../../assets/images/e.png";
        this.joint = "up_down";

      }
      else if (event.code === "Digit6") {
        this.jointImage = "../../assets/images/f.png";
        this.joint = "gripper";

      }
      else {
        this.jointImage = "../../assets/images/pfa.png";
        this.joint = "stop";
      }
    });


    
  }

  onDataReceived(fps: number) {
    this.fps = fps;
  }
  ngOnDestroy(): void {
    this.ttsSubscription.unsubscribe();
  }


  
}
