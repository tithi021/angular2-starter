import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';
import {ClickMeComponent} from './click-me.component';
import {HeroFormComponent} from './hero-form.component';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroListComponent} from './hero-list.component';
import {CrisisListComponent} from './crisis-list.component';

@Component({
	selector: 'my-app',
	template:`<h1>{{story.name}}</h1><courses></courses><click-me></click-me><hero-form></hero-form>
		<h1>Component Router</h1>
	    <nav>
	      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
	      <a [routerLink]="['Heroes']">Heroes</a>
	    </nav>
	    <router-outlet></router-outlet>
	`,
	directives: [CoursesComponent, ClickMeComponent, HeroFormComponent,ROUTER_DIRECTIVES]
})

@RouteConfig([
	{	path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
	{	path: '/heros', name: 'Heroes', component: HeroListComponent}

])

export class AppComponent{
	story = { id: 100, name: 'Hello! Great you run your angular2 app. ' };
}