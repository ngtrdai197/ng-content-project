import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap } from 'rxjs/operators';
import { IPostStore } from '../../core/interfaces/post.interface';
import { PostsService } from '../../core/services/posts.service';

@Injectable()
export class PostsStore extends ComponentStore<IPostStore> {
	public readonly vm$ = this.select(this.state$, ({ posts }) => ({
		posts,
	}));

	constructor(
		private readonly postsService: PostsService,
		private readonly router: Router,
	) {
		super({
			posts: [],
		});

		this.fetchPostsEffect();
	}

	public readonly fetchPostsEffect = this.effect(trigger$ =>
		trigger$.pipe(
			switchMap(() =>
				this.postsService
					.getPosts()
					.pipe(
						tapResponse(
							response => this.patchState({ posts: response }),
							console.error,
						),
					),
			),
		),
	);

	public gotoPostDetails(postId: string) {
		this.router.navigate(['/post-details', postId]);
	}
}
