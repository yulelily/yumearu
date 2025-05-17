import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContentComponent } from "../content/content.component";
import { HomeFeedPost } from '../home-feed-post';
import { HomeFeedPostComponent } from "../home-feed-post/home-feed-post.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, ContentComponent, HomeFeedPostComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeFeedPosts: HomeFeedPost[] = [
    {
      titleId: "my-vow-to-my-liege",
      title: "My Vow to My Liege Review - Indie Historical CN Otome 💖💖",
      genre: "otome",
      date: new Date("May 16, 2025"),
    },
    {
      titleId: "test-1",
      title: "test 1",
      genre: "otome",
      date: new Date("May 16, 2025"),
    },
    {
      titleId: "test-2",
      title: "test 2",
      genre: "otome",
      date: new Date("May 16, 2025"),
    },
  ];
}
