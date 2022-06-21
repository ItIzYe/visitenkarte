import { Injectable, OnInit } from '@angular/core';
import { User } from './user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    userInfo = new Subject<User>();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

    setuser() {
      const userInfo = {
          name: 'Ade',
          prename: 'Ruben',
          phone: '47283268',
          email: 'IIY@gmail.com',
          state: 'Praktikant',
          city: 'Singen',
          count: 'BW',
          pre: 'Waldeckschule',
          high: 'Hegau-Gymnasium',
          pretime: '2012-2016',
          hightime: '2016- 2022',
          abs: 'None',
          sonstiges: '3 Qualifikationen'
        }
        this.userInfo.next(userInfo as User);
    }
}
