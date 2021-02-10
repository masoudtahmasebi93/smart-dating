import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';

@NgModule({
  declarations: [AppComponent,ProfilePictureComponent],
  entryComponents: [ProfilePictureComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
