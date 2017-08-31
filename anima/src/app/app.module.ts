import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/Http';


import { AppComponent } from './app.component';
import { JournalService } from './journal.service';
import { NewUserComponent } from './new-user/new-user.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { NewJournalComponent } from './new-journal/new-journal.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AllJournalsComponent } from './all-journals/all-journals.component';
import { ShowJournalComponent } from './show-journal/show-journal.component';
import { ShowEntryComponent } from './show-entry/show-entry.component';
import { JournalRoutingModule } from './show-journal/journal-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ContentsComponent } from './contents/contents.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { WatsonComponent }  from './watson/watson.component'
// import { WatsonService } from './watson/watson.service';


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewEntryComponent,
    NewJournalComponent,
    LandingPageComponent,
    AllJournalsComponent,
    ShowJournalComponent,
    ShowEntryComponent,
    SignUpComponent,
    LogInComponent,
    ContentsComponent,
    AboutMeComponent,
    ShowJournalComponent, //*********ONLY FOR TESTING**********
    WatsonComponent,      //*********ONLY FOR TESTING**********
    ContentsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'anima'}),
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path: '',
          component: LandingPageComponent
        },
        {
          path: 'sign-up',
          component: SignUpComponent
        },
        {
          path: 'log-in',
          component: LogInComponent
        },
        {
          path: 'all-journals',
          component: AllJournalsComponent
        },
        {
          path: 'new-journal',
          component: NewJournalComponent
        },
        { 
          path: 'user',
          component: AllJournalsComponent
        },
        {

          path: 'about',
          component: AboutMeComponent
        },
        {
          path: 'newentry',   //*********ONLY FOR TESTING**********
          component: NewEntryComponent
        },
        
        {
          path: 'showjournal', //*********ONLY FOR TESTING**********
          component:ShowJournalComponent
        }
      ]),

    JournalRoutingModule,
    FormsModule,
    BrowserModule.withServerTransition({appId: 'anima'}),
    HttpModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
