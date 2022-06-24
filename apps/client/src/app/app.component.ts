import { Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    title = 'client';
    msg?: any;

    getMsgFromChild({$event}: { $event: any }) {this.msg = $event
    console.log(typeof this.msg)}


    constructor() {
    }



}
