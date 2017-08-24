import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowJournalComponent } from './show-journal.component';
import { ShowEntriesComponent } from '../show-entries/show-entries.component';
import { NewEntryComponent } from '../new-entry/new-entry.component';

const journalRoutes: Routes = [
	{
		path: 'journal/:id',
		component: ShowJournalComponent,
		children: [
			{
				path: 'show-entries',
				component: ShowEntriesComponent
			},
			{
				path: 'new-entry',
				component: NewEntryComponent
			}
		]
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(journalRoutes)
	],
	exports: [
		RouterModule
	]
})
export class JournalRoutingModule { }