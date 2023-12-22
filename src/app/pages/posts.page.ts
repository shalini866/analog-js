import { injectContent, injectContentFiles } from "@analogjs/content";
import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Post } from "./post";



@Component({
    selector:"app-posts",
    standalone:true,
    imports:[NgFor, RouterLink],
    template : `
    <ul>
    <li *ngFor="let post of posts">
       <a routerLink ="/blog/{{post.slug}}">{{post.attributes.title}}</a>
    </li>
    </ul>
    `


})
export default class PostPageComponent{
posts = injectContentFiles<Post>()
}