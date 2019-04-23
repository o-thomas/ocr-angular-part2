import { Component } from '@angular/core';
import { Post } from './class/post'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  //post array
  postArray: Array<Post> = [
    { 
      title: "first post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in enim eros.",
      loveIts: 0,
      created_at: new Date(),
    },
    {
      title: "second post",
      content: "Vivamus aliquam quis nulla quis hendrerit. Donec at nunc quis neque dapibus varius.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "third post",
      content: "Duis pellentesque ultrices tortor eget mollis. Duis porta metus ac orci commodo, ornare rhoncus odio tempor.",
      loveIts: 0,
      created_at: new Date()
    }
  ]
}
