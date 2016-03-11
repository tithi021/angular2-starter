import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	template: 
	'<h1>{{story.name}}</h1>'

})

export class AppComponent{
	story = { id: 100, name: 'Hello! Great you run your angular2 app. ' };
}