import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
  styleUrls: ['./list-appareil.component.css']
})
export class ListAppareilComponent implements OnInit {
  isOk : Boolean=true;
 appareils:any;
  constructor(private service:AppareilService){
    setTimeout(()=>{ this.isOk=false},5000);

  }
  switchOnAll(){
    this.service.swithOnAll();
  }
  switchOffAll(){
    this.service.swithOffAll();
  }

  ngOnInit(): void {
    this.appareils=this.service.findAll().subscribe(data =>{
      this.appareils=data;
    });
  }

}
