import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { NewJournalComponent } from './new-journal/new-journal.component';
import { WatsonService } from './watson/watson.service';
import { WatsonComponent } from './watson/watson.component'

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewEntryComponent,
    NewJournalComponent,
    WatsonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'anima'}),
    HttpModule
  ],
  providers: [WatsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
