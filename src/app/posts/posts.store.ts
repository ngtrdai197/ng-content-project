import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap } from 'rxjs/operators';
import { IPostStore } from '../../core/interfaces/post.interface';
import { PostsService } from '../../core/services/posts.service';

@Injectable()
export class PostStore extends ComponentStore<IPostStore> {
	public readonly vm$ = this.select(this.state$, ({ posts, postSelected }) => ({
		posts,
		postSelected,
	}));
	constructor(private readonly postsService: PostsService) {
		super({
			posts: [],
			postSelected: undefined,
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
}
