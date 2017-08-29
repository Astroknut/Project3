import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { JournalService } from './journal.service';
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
    ContentsComponent
  ],
  imports: [
    FormsModule,
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
    BrowserModule.withServerTransition({appId: 'anima'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
