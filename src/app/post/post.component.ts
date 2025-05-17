import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContentComponent } from "../content/content.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [NavBarComponent, ContentComponent, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
}
