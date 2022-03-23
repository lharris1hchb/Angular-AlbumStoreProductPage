import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Album } from './album';

@Injectable()
export class ProductService {

  constructor(private _http : Http) { }

  private _albumUrl : string = '../assets/album.json';

  getAlbum(id : number) : Observable<Album> {
    return this._http.get(this._albumUrl).pipe(
      map((response) => <Album>response.json().album)
    );
  }

}
