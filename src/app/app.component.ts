import { Component,OnDestroy,OnInit } from '@angular/core';
import { Post } from './model/post'
import { Observable, Subject, Subscription } from 'rxjs';
import { PostService } from "./service/post.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postSubscription : Subscription;
  title = 'Blog';
 
 
  constructor(private postService: PostService) { }
 

}
