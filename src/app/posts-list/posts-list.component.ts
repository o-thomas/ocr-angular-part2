import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { Post } from '../model/post';
import { Observable, Subject, Subscription } from 'rxjs';
import { PostService } from "../service/post.service"

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  @Input() post: Post[];

  constructor(private postService: PostService) { }
  postSubscription : Subscription;
  postArray: Array<any> = []
  ngOnInit() {
    this.postService.getPostFromServer();
    this.postSubscription = this.postService.postSubject.subscribe(
      (postArray: Post[]) => {
        this.postArray = postArray;
      }
    );
    this.postService.emitPostSubject();
  }
  
  

  }


