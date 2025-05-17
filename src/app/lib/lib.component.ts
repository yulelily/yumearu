import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-lib',
  imports: [NavBarComponent, ContentComponent],
  templateUrl: './lib.component.html',
  styleUrl: './lib.component.css'
})
export class LibComponent {

}
