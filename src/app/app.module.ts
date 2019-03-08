import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {InjectableService} from './injectable.service'


import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    AddComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [InjectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
