import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	Output,
	EventEmitter,
	ContentChild,
	AfterContentInit,
	AfterViewInit,
	AfterContentChecked,
	AfterViewChecked,
	OnChanges,
	OnDestroy,
	DoCheck,
} from '@angular/core';
import { IPost } from '../../../core/interfaces/post.interface';
import { PostContentDirective } from '../../../shared/directives/post-content.directive';
import { PostHeaderComponent } from '../post-header/post-header.component';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent
	implements
		OnInit,
		AfterContentInit,
		AfterViewInit,
		AfterContentChecked,
		AfterViewChecked,
		OnChanges,
		OnDestroy,
		DoCheck
{
	@Input() public post: IPost | null = null;
	@Output() public onPostDetailsPage = new EventEmitter<string>();
	@ContentChild(PostHeaderComponent) postHeaderComponent!: PostHeaderComponent;

	constructor() {}

	ngOnInit(): void {
		console.log('PostComponent -> ngOnInit');
	}
	ngOnChanges(): void {
		console.log('PostComponent -> ngOnChanges');
	}
	ngDoCheck(): void {
		console.log('PostComponent -> ngDoCheck');
	}

	ngAfterContentInit(): void {
		console.log('PostComponent -> ngAfterContentInit');
	}

	ngAfterContentChecked() {
		console.log('PostComponent -> ngAfterContentChecked');
	}

	ngAfterViewInit() {
		console.log('PostComponent -> ngAfterViewInit');
	}

	ngAfterViewChecked() {
		console.log('PostComponent -> ngAfterViewChecked');
	}
	ngOnDestroy(): void {
		console.log('PostComponent -> ngOnDestroy');
	}
}
