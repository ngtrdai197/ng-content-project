import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostDetailsStore } from './post-details.store';

@Component({
	selector: 'app-post-details',
	templateUrl: './post-details.component.html',
	styleUrls: ['./post-details.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [PostDetailsStore],
})
export class PostDetailsComponent implements OnInit {
	public readonly vm$ = this.postDetailsStore.vm$;
	constructor(private readonly postDetailsStore: PostDetailsStore) {}

	ngOnInit(): void {
		this.vm$.subscribe(console.log);
	}
}
