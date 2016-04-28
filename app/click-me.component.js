System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ClickMeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ClickMeComponent = (function () {
                function ClickMeComponent() {
                    this.clickMessage = '';
                    this.values = '';
                    this.heroes = ['aaa', 'bbb', 'ccc'];
                }
                ClickMeComponent.prototype.onClickMe = function () {
                    this.clickMessage = 'You are my hero';
                };
                ClickMeComponent.prototype.onkey = function (value) {
                    this.values += value + ' | ';
                };
                ClickMeComponent.prototype.addHero = function (newHero) {
                    if (newHero) {
                        this.heroes.push(newHero);
                    }
                };
                ClickMeComponent = __decorate([
                    core_1.Component({
                        selector: 'click-me',
                        template: "\n    <button (click)=\"onClickMe()\">Click me!</button>\n    {{clickMessage}}\n    <br><br>\n\n    <h1>Key</h1>\n    <input #box (keyup)=\"onkey(box.value)\">\n    <p>{{values}}</p>\n\n    <br><br>\n\n    <h1>Key Enter</h1>\n    <input #box (keyup.enter)=\"values=box.value\">\n    <p>{{values}}</p>\n\n\n    <h1>Key Blur</h1>\n    <input #newHero \n    (keyup.enter)=\"addHero(newHero.value)\"\n    (blur)=\"addHero(newHero.value); newHero.value=''\">\n    \n    <button (click)=\"addHero(newHero.value)\">Add</button>\n    <br>\n\n    <ul><li *ngFor=\"#hero of heroes\">{{hero}}</li></ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ClickMeComponent);
                return ClickMeComponent;
            }());
            exports_1("ClickMeComponent", ClickMeComponent);
        }
    }
});
//# sourceMappingURL=click-me.component.js.map