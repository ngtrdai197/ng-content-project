import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostsStore } from './posts.store';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [PostsStore],
})
export class PostsComponent implements OnInit {
	public readonly vm$ = this.postStore.vm$;
	constructor(private readonly postStore: PostsStore) {}

	ngOnInit(): void {
		console.log("PostsComponent -> ngOnInit");
	}

	public onNavigatePostDetailsPage(postId: string): void {
		this.postStore.gotoPostDetails(postId);
	}

	public onLogout(): void {
		console.log('Logout');
	}
}
