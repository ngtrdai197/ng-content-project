import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PostHeaderComponent } from './post-header/post-header.component';
import { ButtonComponent } from '../button/button.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'posts',
		pathMatch: 'full',
	},
	{
		path: 'posts',
		component: PostsComponent,
	},
];

@NgModule({
	declarations: [PostsComponent, PostComponent, PostHeaderComponent, ButtonComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PostsModule {}
