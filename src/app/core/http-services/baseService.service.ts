import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    constructor(private http: HttpClient) { }


    public url = '../assets/list.json';


    getData() {
        return this.http.get(this.url);
    }
}
