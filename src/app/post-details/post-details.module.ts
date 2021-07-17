import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: ':postId',
		component: PostDetailsComponent,
	},
];

@NgModule({
	declarations: [PostDetailsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PostDetailsModule {}
