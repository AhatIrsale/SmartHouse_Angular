import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appareil } from '../model/Appareil';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareils:any;
  url="http://localhost:8082/api/Appareil/appareils";



  constructor(private http:HttpClient) { }





  findAll():Observable<Appareil[]>{
    return  this.http.get<Appareil[]>(this.url);
  }




  swithOnAll():void{
    for(let item of this.appareils)
    {
      item.status="On"
    }
  }


  swithOffAll():void{
    for(let item of this.appareils)
    {
      item.status="Off"
    }

  }


  switch1(id:number):void{
    for(let item of this.appareils)
    {
        if(this.appareils[id].status==="On")
          {
            this.appareils[id].status="Off"
          }
          else
          {
            this.appareils[id].status="On";
          }
    }

  }


  switch(id: number): void {
    for (let item of this.appareils) {
      if (item.id === id) {
        if (item.status === true) {
          item.status = false;
        } else {
          item.status = true;
        }
        break;
      }
    }
  }



}
