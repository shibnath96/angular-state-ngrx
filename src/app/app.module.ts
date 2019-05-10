import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';

//Store configuration
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( reducers )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
