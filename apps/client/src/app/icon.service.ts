import { Injectable, OnInit } from '@angular/core';
import { Icon } from './icon';
import { Subject } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';

@Injectable({
    providedIn: 'root'
})
export class IconService {
    iconService = new Subject<Icon>();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    seticon() {
        const iconService = {
            name: '<mat-icon>perm_identity</mat-icon>',
            phone: '<mat-icon> phone</mat-icon>',
            email: '<mat-icon>bookmark</mat-icon>',
            state: '<mat-icon>trending_up</mat-icon>'
        }
        this.iconService.next(iconService as Icon);
    }
}
