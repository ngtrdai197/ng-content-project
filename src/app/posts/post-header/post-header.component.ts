import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	AfterViewInit,
	ChangeDetectorRef,
	AfterViewChecked,
	OnChanges,
	DoCheck,
	OnDestroy,
	AfterContentInit,
	AfterContentChecked,
	Input,
} from '@angular/core';

@Component({
	selector: 'app-post-header',
	templateUrl: './post-header.component.html',
	styleUrls: ['./post-header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostHeaderComponent
	implements
		OnInit,
		AfterViewInit,
		AfterViewChecked,
		OnChanges,
		DoCheck,
		OnDestroy,
		AfterContentInit,
		AfterContentChecked
{
	@Input() headerName: string = '';
	public nameComponent = 'PostHeaderComponent -> Variable';
	constructor(private readonly cdr: ChangeDetectorRef) {}

	ngOnInit(): void {
		console.log('PostHeaderComponent -> ngOnInit');
		// this.nameComponent = this.nameComponent + ' updated in ngAfterViewInit';
	}

	ngOnChanges(): void {
		console.log('PostHeaderComponent -> ngOnChanges');
	}
	ngDoCheck(): void {
		console.log('PostHeaderComponent -> ngDoCheck');
	}
	ngAfterContentInit(): void {
		console.log('PostHeaderComponent -> ngAfterContentInit');
	}
	ngAfterContentChecked(): void {
		console.log('PostHeaderComponent -> ngAfterContentChecked');
	}
	ngAfterViewChecked() {
		console.log('PostHeaderComponent - >ngAfterViewChecked');
	}

	ngAfterViewInit() {
		console.log('PostHeaderComponent - >ngAfterViewInit');
		// this.cdr.markForCheck();
	}

	ngOnDestroy(): void {
		console.log('PostHeaderComponent -> ngOnDestroy');
	}
}
