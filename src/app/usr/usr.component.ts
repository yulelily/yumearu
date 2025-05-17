import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContentComponent } from "../content/content.component";
import { SpoilerTextComponent } from "../spoiler-text/spoiler-text.component";
import { SpoilerImageComponent } from "../spoiler-image/spoiler-image.component";

@Component({
  selector: 'app-usr',
  imports: [NavBarComponent, ContentComponent, SpoilerTextComponent, SpoilerImageComponent],
  templateUrl: './usr.component.html',
  styleUrl: './usr.component.css'
})
export class UsrComponent {

}
