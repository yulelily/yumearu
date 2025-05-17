import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContentComponent } from "../content/content.component";
import { ErrorComponent } from "../error/error.component";

@Component({
  selector: 'app-lib',
  imports: [NavBarComponent, ContentComponent, ErrorComponent],
  templateUrl: './lib.component.html',
  styleUrl: './lib.component.css'
})
export class LibComponent {

}
