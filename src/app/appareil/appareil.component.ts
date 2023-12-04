import { Component,Input } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {
  @Input()  id!: number;
  @Input() appareilName : String ="Light";
  @Input() appareilStatus : boolean = true;
  @Input()  appareilAvatar : String = "assets/images/avatar.PNG";

  getColor():String{
    if(this.appareilStatus===false) return "red";
    else return "green"
  }
  constructor(private service:AppareilService)
  {

  }
  changestate():void{
    this.service.switch(this.id);


  }

}
