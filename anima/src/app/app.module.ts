import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { NewJournalComponent } from './new-journal/new-journal.component';
import { GuardsComponent } from './guards/guards.component';
import { HelpersComponent } from './helpers/helpers.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewEntryComponent,
    NewJournalComponent,
    GuardsComponent,
    HelpersComponent,
    ModelsComponent,
    ServicesComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'anima'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
