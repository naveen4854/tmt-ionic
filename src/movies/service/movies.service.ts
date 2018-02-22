import { Observable } from 'rxjs/Observable';
import { HttpUtility } from './../../shared/utilities/http/http-utility.service';
import { Injectable } from '@angular/core/';

@Injectable()
export class MovieService {
    constructor(private _http: HttpUtility)
    { }

    getMovies(id?: number) {
        let url = id ? 'movie/city/' + id : 'movie/city/all';
        return this._http.get(url);
    }
    getTheatres(id?: number) {
        let url = id ? 'Theatre/city/' + id : 'Theatre/city/all';
        return this._http.get(url);
    }
    getCities(): Observable<any[]> {
        return this._http.get('City/all');
    }
    getTickets(filters: any): Observable<any[]> {
        return this._http.post('getTickets', filters);
    }
    postTicket(obj: any) {
        return this._http.post('ticket/add', obj);
    }
    getImages() {
        return this._http.get('Image/GetImages/');
    }
}