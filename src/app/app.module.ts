import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { GithubUserWidgetModule } from 'glcp-github-user-widget';

import { AppComponent } from './app.component';
import { GlcpGithubUserWidgetModule } from 'glcp-github-user-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GlcpGithubUserWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
