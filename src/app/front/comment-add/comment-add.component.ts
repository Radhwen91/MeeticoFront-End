import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent implements OnInit {
  @Input() currentPost;
  comments = [];
  constructor() { }

  ngOnInit(): void {
  }

}
