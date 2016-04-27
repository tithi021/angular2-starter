import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'

@Component({
	selector: 'my-app',
	template: 
	'<h1>{{story.name}}</h1><courses></courses>',
	directives: [CoursesComponent]

})

export class AppComponent{
	story = { id: 100, name: 'Hello! Great you run your angular2 app. ' };
}