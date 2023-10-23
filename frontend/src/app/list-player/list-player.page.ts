import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { playerService } from '../services/player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-player.page.html',
  styleUrls: ['./list-player.page.scss'],
})
export class ListPlayersPage implements OnInit {
  players: any = [];

  constructor(private playerService: playerService, private router: Router) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.getAllplayers();
  }

  getAllplayers() {
    this.playerService.getplayers().subscribe((bikes) => {
      console.log(bikes);
      this.players = bikes;
    });
  }

  // DECOMMENT:
  addplayer() {
    this.router.navigateByUrl('/add-player');
  }
}
