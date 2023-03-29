import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerCrudService {
  url= "http://localhost:3000/player";

  constructor(private http:HttpClient) { }
  getPlayer(){
    return this.http.get(this.url);
  }
  postPlayer(data:any){
    return  this.http.post(this.url,data);
  }
  deletePlayer(id:any){
    return  this.http.delete(this.url+"/"+id);
  }
  getPlayerById(id:any){
    return this.http.get(this.url+"/"+id);

  }
  updatePlayer(id:any,data:any){
    return this.http.put(this.url+"/"+id,data)
  }
}
