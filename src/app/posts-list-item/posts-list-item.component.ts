import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../class/post'

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.css']
})
export class PostsListItemComponent implements OnInit {

  constructor() { }
  @Input() post: Post;

  ngOnInit() {
  }
  
  like() {
    this.post.loveIts++;
  }
  dislike() {
    this.post.loveIts--;
  }
}
