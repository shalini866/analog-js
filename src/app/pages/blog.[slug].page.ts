 import { MarkdownComponent, injectContent } from "@analogjs/content";
import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { Post } from "./post";


@Component({
    selector: 'app-blog-post',
    standalone:true,  
    imports: [AsyncPipe , MarkdownComponent],
    template: `<h1>My first Blog Post</h1>
    
     {{ (post$ | async)?.content }}
    
    `
})

export default class BlogPostPageComponent{
  post$ = injectContent<Post>();
  // route = inject (ActivatedRoute);
  // slug$ = this.route.paramMap.pipe(map(params => params.get("slug")));
}