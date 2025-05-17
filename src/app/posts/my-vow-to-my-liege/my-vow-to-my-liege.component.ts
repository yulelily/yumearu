import { Component } from '@angular/core';
import { PostComponent } from "../../post/post.component";
import { SpoilerImageComponent } from "../../spoiler-image/spoiler-image.component";
import { SpoilerTextComponent } from "../../spoiler-text/spoiler-text.component";
import { ImageComponent } from "../../image/image.component";

@Component({
  selector: 'app-my-vow-to-my-liege',
  imports: [PostComponent, SpoilerImageComponent, SpoilerTextComponent, ImageComponent],
  templateUrl: './my-vow-to-my-liege.component.html',
  styleUrl: './my-vow-to-my-liege.component.css'
})
export class MyVowToMyLiegeComponent {

}
