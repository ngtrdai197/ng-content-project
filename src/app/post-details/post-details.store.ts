import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { pluck, switchMap } from 'rxjs/operators';
import { IPostDetailsStore } from '../../core/interfaces/post.interface';
import { PostsService } from '../../core/services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class PostDetailsStore extends ComponentStore<IPostDetailsStore> {
	public readonly vm$ = this.select(this.state$, ({ currentPost }) => ({
		currentPost,
	}));

	constructor(
		private readonly postsService: PostsService,
		private readonly activatedRoute: ActivatedRoute,
	) {
		super({
			currentPost: null,
		});

		this.fetchPostDetailsEffect(
			this.activatedRoute.params.pipe(pluck('postId')),
		);
	}

	public readonly fetchPostDetailsEffect = this.effect<string>(trigger$ =>
		trigger$.pipe(
			switchMap(postId =>
				this.postsService
					.getPostById(postId)
					.pipe(
						tapResponse(
							response => this.patchState({ currentPost: response }),
							console.error,
						),
					),
			),
		),
	);
}
