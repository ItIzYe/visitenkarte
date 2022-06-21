import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule.forRoot([]), MatButtonModule, FormsModule, MatIconModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
