import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector:"app-parent",
    standalone:true,
    imports:[RouterOutlet, RouterLink],
    template : `<div>Parent Route</div>
    
    <a routerLink="/parent">Home</a>
    <a routerLink="/parent/child">child Route</a>

    <router-outlet></router-outlet>
    `


})

export default class ParentPageComponent{

}