import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    /*
        Web Api hosted path location.
    */
    getApiUri() {
        return this.getBaseUri() + 'api/';
    }

    /*
       Get Application Hosted Path
    */
    getBaseUri() {
        const pathArray = window.location.href.split('/');
        const protocol = pathArray[0];
        const host = pathArray[2];
        const path = protocol + '//' + host + '/';
       
        return path;
    }
}
