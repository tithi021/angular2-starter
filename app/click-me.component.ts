import {Component} from 'angular2/core';
@Component({
	selector: 'click-me',

	template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}
    <br><br>

    <h1>Key</h1>
    <input #box (keyup)="onkey(box.value)">
    <p>{{values}}</p>

    <br><br>

    <h1>Key Enter</h1>
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>


    <h1>Key Blur</h1>
    <input #newHero 
    (keyup.enter)="addHero(newHero.value)"
    (blur)="addHero(newHero.value); newHero.value=''">
    
    <button (click)="addHero(newHero.value)">Add</button>
    <br>

    <ul><li *ngFor="#hero of heroes">{{hero}}</li></ul>
    `
})

export class ClickMeComponent {
	clickMessage = '';

	onClickMe(){
		this.clickMessage = 'You are my hero';
	}

	values = '';

	onkey(value:string){
		this.values += value+ ' | ';
	}

	heroes = ['aaa', 'bbb', 'ccc'];

	addHero(newHero: string){
		if(newHero){
			this.heroes.push(newHero)
		}
	}
}