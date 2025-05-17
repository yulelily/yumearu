import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContentComponent } from "../content/content.component";
import { SpoilerTextComponent } from "../spoiler-text/spoiler-text.component";
import { SpoilerImageComponent } from "../spoiler-image/spoiler-image.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, ContentComponent, SpoilerTextComponent, SpoilerImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
