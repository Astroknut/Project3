import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from '../contents/contents.component';
import { ShowJournalComponent } from './show-journal.component';
import { ShowEntryComponent } from '../show-entry/show-entry.component';
import { NewEntryComponent } from '../new-entry/new-entry.component';

const journalRoutes: Routes = [
	{
		path: 'journal/:id',
		component: ShowJournalComponent,
		children: [
			{
				path: 'contents',
				component: ContentsComponent
			},
			{
				path: 'show-entry/:id',
				component: ShowEntryComponent
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