import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { HomeComponent} from './home';
import { CardComponent} from './card';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [AppComponent, HomeComponent, CardComponent],
    imports: [
        BrowserModule,
        MatButtonModule,
        FormsModule,
        MatIconModule,
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
