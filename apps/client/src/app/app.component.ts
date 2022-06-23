import { Component, Input, ViewChild, AfterViewInit} from '@angular/core';
import { Shared } from '@app/data';
import { VERSION } from '../environments/version';
import {MatIconModule} from '@angular/material/icon';
import { User } from './user';
import { Icon } from './icon';
import { HomeComponent} from './home';
import { names } from '@nrwl/workspace';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    title = 'client';
    userinfo?: User ;
    usericon?: Icon;
    msg?: any;

    getMsgFromChild({$event}: { $event: any }) {this.msg = $event
    console.log(typeof this.msg)}


    constructor() {
    }



}
