import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	DoCheck,
	OnChanges,
	OnDestroy,
	EventEmitter,
	HostListener,
	Output,
} from '@angular/core';

@Component({
	selector: 'app-button',
	template: ` <ng-content></ng-content> `,
	styles: [
		`
			:host {
				display: inline-block;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent
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
	@Output()
	public submit = new EventEmitter<void>();

	@HostListener('click')
	public onClick(): void {
		this.submit.emit();
	}
	constructor() {}

	ngOnInit(): void {
		console.log('ButtonComponent -> ngOnInit');
		// this.nameComponent = this.nameComponent + ' updated in ngAfterViewInit';
	}

	ngOnChanges(): void {
		console.log('ButtonComponent -> ngOnChanges');
	}
	ngDoCheck(): void {
		console.log('ButtonComponent -> ngDoCheck');
	}
	ngAfterContentInit(): void {
		console.log('ButtonComponent -> ngAfterContentInit');
	}
	ngAfterContentChecked(): void {
		console.log('ButtonComponent -> ngAfterContentChecked');
	}
	ngAfterViewChecked() {
		console.log('ButtonComponent - >ngAfterViewChecked');
	}

	ngAfterViewInit() {
		console.log('ButtonComponent - >ngAfterViewInit');
		// this.cdr.markForCheck();
	}

	ngOnDestroy(): void {
		console.log('ButtonComponent -> ngOnDestroy');
	}
}
