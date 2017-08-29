import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { NewJournalComponent } from './new-journal/new-journal.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AllJournalsComponent } from './all-journals/all-journals.component';
import { ShowJournalComponent } from './show-journal/show-journal.component';
import { ShowEntriesComponent } from './show-entries/show-entries.component';
import { JournalRoutingModule } from './show-journal/journal-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

import { WatsonService } from './watson/watson.service';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewEntryComponent,
    NewJournalComponent,
    LandingPageComponent,
    AllJournalsComponent,
    ShowJournalComponent,
    ShowEntriesComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
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
        }
      ]),
    JournalRoutingModule,
    FormsModule,
    BrowserModule.withServerTransition({appId: 'anima'}),
    HttpModule
  ],
  providers: [WatsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
