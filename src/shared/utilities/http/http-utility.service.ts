import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/shareReplay';
import { Config } from "../config";
import { GlobalEventsManager } from "../global-events-manager";

@Injectable()
export class HttpUtility {

    private baseApiUrl: string;

    constructor(
        private config: Config,
        private http: HttpClient,
        private _gem: GlobalEventsManager) {
        this.baseApiUrl = this.config.getByKey('baseApiUrl');
        //this.baseApiUrl = 'http://localhost/takemytickets/api/';
    }

    /**
     * Post
     * @param url
     * @param body
     * @param options
     */
    public post(url: string, body: any, options?: HttpParams) {
        return this.http.post(this.getApiUrl(url), body)
            .catch(this.handleError);
    }
    /**
     * delete
     * @param url
     * @param options
     */
    public delete(url: string, options?: HttpParams) {
        return this.http.delete(this.getApiUrl(url))
            .catch(this.handleError);
    }
    /**
     * get
     * @param url
     * @param options
     */
    public get(url: string, options?: HttpParams) {
        return this.http.get(this.getApiUrl(url))
            .shareReplay()
            .catch(this.handleError);
    }

    /**
     * getFile
     * @param url
     * @param options
     */
    public getFile(url: string, options?: HttpParams) {
        window.open(this.getApiUrl(url));
    }

    /**
     * handleError
     * @param response
     */
    private handleError(response: any) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        this._gem.toggleLoader(false);
        return Observable.throw(JSON.parse(response.json().Message) || 'Server error');
    }


    /**
     * getApiUrl
     * @param url
     */
    private getApiUrl(url) {
        return this.baseApiUrl + url;
    }

}
