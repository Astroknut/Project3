import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { NewJournalComponent } from './new-journal/new-journal.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AllJournalsComponent } from './all-journals/all-journals.component';
import { ShowJournalComponent } from './show-journal/show-journal.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewEntryComponent,
    NewJournalComponent,
    LandingPageComponent,
    AllJournalsComponent,
    ShowJournalComponent
  ],
  imports: [
    RouterModule.forRoot([
        {
          path: '',
          component: LandingPageComponent
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
          path: 'journal/:id',
          component: ShowJournalComponent
        }
      ]),
    BrowserModule.withServerTransition({appId: 'anima'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
