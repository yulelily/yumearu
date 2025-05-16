import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
