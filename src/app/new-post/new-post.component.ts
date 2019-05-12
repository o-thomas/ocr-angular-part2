import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from "../service/post.service";
import { Post } from '../model/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService,) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      postName: ['', Validators.required],
      postContent: ['', Validators.required]
    });
}
onSubmitForm(){
  const title = this.postForm.get('postName').value
    const content = this.postForm.get('postContent').value
    const newPost = new Post(title, content, 0)
    this.postService.addPost(newPost)
}

}
