import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContentDirective } from './directives/post-content.directive';



@NgModule({
  declarations: [
    PostContentDirective
  ],
  exports: [
    PostContentDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
