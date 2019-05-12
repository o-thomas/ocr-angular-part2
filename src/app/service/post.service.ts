import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Post } from '../model/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient, private router: Router) { }
 
  postSubject = new Subject<Post[]>();
  private postArray: Array<Post> = []

  // add post array in database 
  addPost(post: Post) {
    this.postArray.push(post);
    this.savePostToServer();
  }

  // remove post in database
  removePost(post: Post) {
    var index = this.postArray.indexOf(post);
    this.postArray.splice(index, 1);
    this.savePostToServer();
    this.emitPostSubject();
  }

  // increment loveIts attribute for post type
  like(post) {
   post.loveIts++;
    this.emitPostSubject();
  }

  //decrements loveIts attribute for post type
  dislike(post) {
    post.loveIts--;
    this.emitPostSubject();
  }

  // save post array in database
  savePostToServer() {
    this.httpClient
      .put('https://angular-blog-48c8a.firebaseio.com/posts.json', this.postArray)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
          this.router.navigate(['/postList'])

        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
      
}

// get all post in database
getPostFromServer() {
  this.httpClient
    .get<any[]>('https://angular-blog-48c8a.firebaseio.com/posts.json')
    .subscribe(
      (response) => {
        this.postArray = response;
        this.emitPostSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

//send post array in front
  emitPostSubject() {
    this.postSubject.next(this.postArray.slice());
  }

}
