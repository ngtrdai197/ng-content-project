import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[appPostContent]',
})
export class PostContentDirective {
	constructor(public templateRef: TemplateRef<unknown>) {
    // console.log(this.templateRef)
  }
}
