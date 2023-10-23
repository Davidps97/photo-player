import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListplayersPageRoutingModule } from './list-player-routing.module';

import { ListPlayersPage } from './list-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListplayersPageRoutingModule
  ],
  declarations: [ListPlayersPage]
})
export class ListplayersPageModule {}
