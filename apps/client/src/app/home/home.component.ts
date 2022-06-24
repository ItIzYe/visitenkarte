import { Component, Injectable, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User} from '../user';

@Component({
    selector: 'form-comp',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

@Injectable({
    providedIn: 'root'
})


export class HomeComponent implements OnInit{

    @Output() callParent = new EventEmitter<User>();

    userInfo: User = {
        name: '' ,
        prename:'',
        phone:'',
        email:' ',
        city: '',
        state:'',
        ql1: '',
        ql2: '',
        ql3:'',
        pre: '',
        preTime: '',
        high: '',
        highTime: '',
        abs: '',
        pos: '',
    }


    print() {
        console.log(this.userInfo)
    }

    msgToParent() {
        this.callParent.emit(this.userInfo );
    }
    constructor(
    ) {}


    ngOnInit() {
    }
}
