import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      // tslint:disable-next-line: max-line-length
      "Bearer BQBqiWNwAgSKps7Kczy6PTBt3jYIG5rbesZStJGlips4rgcv7LoPXjD3lDQS2wRRSx3k0IJvDYkyHTLKdeAnVtanKT8vXKCvc0U7PuaFeGnDDWrqhC-XiFu9mUGe76hKDiuZpanUI46sLh3wQzSqy1tksYEPLC9Kk8WZibj_VGNQMp1APFiFw2LpwwsNxuE16dAZRgLZ"
      );
    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
