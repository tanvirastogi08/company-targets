import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

export interface ILoader {
    isLoading: boolean;
}

@Injectable()
export class LoaderService {

    public loader: ILoader = { isLoading: false };
    public loaderEvent = new Subject();

    constructor(private http?: Http) {
        this.http = http;
    }

    showLoader() {
        this.loader.isLoading = true;
        this.loaderEvent.next(true);
    }

    hideLoader() {
        this.loader.isLoading = false;
        this.loaderEvent.next(false);
    }

}

