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
import { ShowEntriesComponent } from './show-entries/show-entries.component';
import { JournalRoutingModule } from './show-journal/journal-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewEntryComponent,
    NewJournalComponent,
    LandingPageComponent,
    AllJournalsComponent,
    ShowJournalComponent,
    ShowEntriesComponent
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
        }
      ]),
    JournalRoutingModule,
    BrowserModule.withServerTransition({appId: 'anima'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
