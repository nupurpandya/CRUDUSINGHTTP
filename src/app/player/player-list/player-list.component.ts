import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerCrudService } from 'src/app/player-crud.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  user: any;

  constructor(private playerservice:PlayerCrudService,private routes:Router) { }

  ngOnInit(): void {
    this.playerservice.getPlayer().subscribe((res:any)=>this.user=res);
  }
  delPlayer(id:any){
    this.playerservice.deletePlayer(id).subscribe((res:any)=>this.playerservice.getPlayer().subscribe((res:any)=>this.user=res));
    ;
  }
  editPlayer(id:any){

    this.routes.navigate(["player-form",id]);
  }
}
