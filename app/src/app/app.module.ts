import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponentsComponent } from './component/input-components/input-components.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImageComponentsComponent } from './component/image-components/image-components.component';
import { MapComponentsComponent } from './component/map-components/map-components.component';
import { CommentsComponentsComponent } from './component/comments-components/comments-components.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentsComponent,
    ImageComponentsComponent,
    MapComponentsComponent,
    CommentsComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
