import { Component, input } from '@angular/core';
import { HomeFeedPost } from '../home-feed-post';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-feed-post',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-feed-post.component.html',
  styleUrl: './home-feed-post.component.css'
})
export class HomeFeedPostComponent {
  post = input.required<HomeFeedPost>();
}
