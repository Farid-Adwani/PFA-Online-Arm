import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-joint',
  templateUrl: './joint.component.html',
  styleUrls: ['./joint.component.css']
})
export class JointComponent {

  @Input() public jointImage: string = "../../assets/images/a.png";
  
}
