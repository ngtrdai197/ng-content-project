import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from '../core/core.module';
import { appRoutes } from './app.routes';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, CoreModule, RouterModule.forRoot(appRoutes)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
