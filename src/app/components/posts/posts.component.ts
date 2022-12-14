import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/Post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log('GET response:', this.posts);
    });
  }

  delete(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== post.id);

    console.log('parent clicked');

    this.postService.deletePost(post).subscribe((res) => {
      console.log('delete API response:', res);
    });
  }
}
