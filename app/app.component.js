System.register(['angular2/core', './courses.component', './click-me.component', './hero-form.component', 'angular2/router', './hero-list.component', './crisis-list.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, click_me_component_1, hero_form_component_1, router_1, hero_list_component_1, crisis_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (click_me_component_1_1) {
                click_me_component_1 = click_me_component_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (crisis_list_component_1_1) {
                crisis_list_component_1 = crisis_list_component_1_1;
            }],
        execute: function() {
            router_1.RouteConfig, router_1.ROUTER_DIRECTIVES;
            AppComponent = (function () {
                function AppComponent() {
                    this.story = { id: 100, name: 'Hello! Great you run your angular2 app. ' };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>{{story.name}}</h1><courses></courses><click-me></click-me><hero-form></hero-form>\n\t\t<h1>Component Router</h1>\n\t    <nav>\n\t      <a [routerLink]=\"['CrisisCenter']\">Crisis Center</a>\n\t      <a [routerLink]=\"['Heroes']\">Heroes</a>\n\t    </nav>\n\t    <router-outlet></router-outlet>\n\t",
                        directives: [courses_component_1.CoursesComponent, click_me_component_1.ClickMeComponent, hero_form_component_1.HeroFormComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/crisis-center', name: 'CrisisCenter', component: crisis_list_component_1.CrisisListComponent },
                        { path: '/heros', name: 'Heroes', component: hero_list_component_1.HeroListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map