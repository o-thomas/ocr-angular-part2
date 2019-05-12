import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post'
import { PostService } from '../service/post.service'

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.css']
})
export class PostsListItemComponent implements OnInit {

  constructor(private postService: PostService) { }
  @Input() post: Post;

  ngOnInit() {
  }
  
  like(post) {
    this.postService.like(post);
  }

  dislike(post) {
    this.postService.dislike(post);
  }

  delete(post) {
    this.postService.removePost(post)
  }

}
