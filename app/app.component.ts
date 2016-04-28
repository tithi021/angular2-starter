import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {ClickMeComponent} from './click-me.component'

@Component({
	selector: 'my-app',
	template: 
	'<h1>{{story.name}}</h1><courses></courses><click-me></click-me>',
	directives: [CoursesComponent, ClickMeComponent]

})

export class AppComponent{
	story = { id: 100, name: 'Hello! Great you run your angular2 app. ' };
}