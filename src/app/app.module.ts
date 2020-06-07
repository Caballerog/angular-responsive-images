import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommunityComponent } from './components/community/community.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, CommunityComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
