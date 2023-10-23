import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddplayerPageRoutingModule } from './add-player-routing.module';

import { AddPlayerPage } from './add-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddplayerPageRoutingModule
  ],
  declarations: [AddPlayerPage]
})
export class AddPlayerPageModule {}
