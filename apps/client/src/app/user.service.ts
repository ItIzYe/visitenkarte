import { Injectable } from '@angular/core';
import { User } from './user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    sendObject = new Subject();


    // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

    communicateObject({obj}: { obj: any }) {
      this.sendObject.next(obj);
    }

}
