import { Injectable } from '@angular/core';
import {Http,Response} from"@angular/http";

//injecting service into module
@Injectable()

export class FlickrService {
key = "0a4c68dd6729bb2c46fa0e6b695fc64a";
secret = "6cb9903f8baee5d3";
urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
constructor(private _http: Http) {}

searchPhotos(searchTerm: any) {
 const url = this.urlBase.replace('API_KEY', this.key) .replace('TEXT', searchTerm);
return this._http.get(url);

}


}

		