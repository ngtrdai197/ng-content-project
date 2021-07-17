import { Routes } from '@angular/router';

export const appRoutes: Routes = [
	{
		path: '',
		loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule),
	},
	{
		path: 'post-details',
		loadChildren: () =>
			import('./post-details/post-details.module').then(
				m => m.PostDetailsModule,
			),
	},
];
