import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
