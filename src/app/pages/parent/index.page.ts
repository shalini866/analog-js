import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector:"app-parent-home",
    standalone:true,
    imports:[RouterOutlet],
    template : `<div>Parent Route</div>`
})

export default class ParentHomePageComponent{

}