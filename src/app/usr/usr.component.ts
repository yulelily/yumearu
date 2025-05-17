import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-usr',
  imports: [NavBarComponent, ContentComponent],
  templateUrl: './usr.component.html',
  styleUrl: './usr.component.css'
})
export class UsrComponent {

}
