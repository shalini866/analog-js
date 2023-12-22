import { RouteMeta } from "@analogjs/router";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

export const routeMeta : RouteMeta = {
    canActivate : [(route)=> new Promise(resolve => setTimeout(()=>{
         resolve(true)
    }, 2000))],
}
@Component({
    selector:"app-parent-child",
    standalone:true,
    imports:[RouterOutlet],
    template : `<div>Child</div>`
})

export default class ParentChildPageComponent{

}