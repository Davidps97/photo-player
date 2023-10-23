import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class playerService {
  endPoint = 'http://localhost:8080/api/players';

  constructor(private httpClient: HttpClient) {}

  getplayers() {
    return this.httpClient.get(this.endPoint);
  }

  // DECOMMENT:
  createplayer(player, blob) {
    let formData = new FormData();
    formData.append('brand', player.brand);
    formData.append('model', player.model);
    formData.append('file', blob);
    console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    return this.httpClient.post(this.endPoint, formData);
  }
}
