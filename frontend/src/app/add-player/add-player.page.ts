import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { playerService } from '../services/player.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.page.html',
  styleUrls: ['./add-player.page.scss'],
})
export class AddPlayerPage implements OnInit {
  playerForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = '';

  constructor(
    public formBuilder: FormBuilder,
    private playerService: playerService,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.playerForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = '';
  }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
    });
  }

  get errorControl() {
    return this.playerForm.controls;
  }

  takePhoto() {
    // DECOMMENT:
    this.photoService.takePhoto().then((data) => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    // DECOMMENT:
    this.photoService.pickImage().then((data) => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    // DECOMMENT:
    this.capturedPhoto = null;
  }

  async submitForm() {
    // DECOMMENT:
    this.isSubmitted = true;
    if (!this.playerForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != '') {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.playerService
        .createplayer(this.playerForm.value, blob)
        .subscribe((data) => {
          console.log('Photo sent!');
          this.router.navigateByUrl('/list-players');
        });
    }
  }
}
