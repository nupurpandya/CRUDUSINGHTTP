import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerCrudService } from 'src/app/player-crud.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  public playerForm!:FormGroup
  response: any;
  btn:string="Submit";
  condition:boolean=true;
  constructor(private playerservice:PlayerCrudService ,private routes:Router,private route:ActivatedRoute) { }
 myid!:any;
  ngOnInit(): void {
    this.playerForm=new FormGroup({
      "playername":new FormControl(null,Validators.required),
      "country":new FormControl(null,Validators.required),
      "playerscore":new FormControl(null,Validators.required),
      "exp":new FormControl(null,Validators.required),
      "age":new FormControl(null,Validators.required),
     })
     this.myid=this.route.snapshot.paramMap.get("id");
     console.log(this.myid);
     
     if(this.myid != " "){
      this.playerservice.getPlayerById(this.myid).subscribe((res)=>{
        this.response=res;
        this.playerForm.setValue({"playername":this.response.playername,
        "country":this.response.country,
        "playerscore":this.response.playerscore,
        "exp":this.response.exp,
        "age":this.response.age})

      }
      );
      this.btn="UPDATE"
      this.condition=false;
     }
     
  }
  postData(){
    this.playerservice.postPlayer(this.playerForm.value).subscribe(item=>item);
    this.routes.navigate(["player-list"]);
    
  }
  editPlayer(){
    this.playerservice.updatePlayer(this.myid,this.playerForm.value).subscribe((res)=>res)
    this.routes.navigate(["player-list"]);
  }

}
