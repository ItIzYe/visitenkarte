import { Component, Input, OnInit } from '@angular/core';
import { Shared } from '@app/data';
import { VERSION } from '../environments/version';
import {MatIconModule} from '@angular/material/icon';
import { UserService} from './user.service';
import { User } from './user';
import { IconService} from './icon.service';
import { Icon } from './icon';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    title = 'client';
    userinfo?: User;
    usericon?: Icon;



    constructor(public readonly userservice: UserService, public readonly iconservice: IconService) {
        this.userservice.setuser()
        console.log('test 2')
        userservice.userInfo.subscribe(userInfo => {
            console.log('test 1')
            console.log(userInfo)
            this.userinfo = userInfo
        })
        this.iconservice.seticon()
        console.log('Test Icon 1')
        iconservice.iconService.subscribe( iconService => {
            console.log('Test Icon 2')
            this.usericon = iconService
        })

    }

    print() {
        console.log(this.userinfo)
        console.log(this.usericon)
    }

    ngOnInit(): void {
        this.userservice.setuser()
        this.iconservice.seticon()
    }

}
