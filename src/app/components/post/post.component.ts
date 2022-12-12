import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() ip_post: Post | null = null;
  @Output() op_delete = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onDeletePost(e: Event) {
    e.stopPropagation();
    // console.log('child clicked');
    this.op_delete.emit();
  }
}
