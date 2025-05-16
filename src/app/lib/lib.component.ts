import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-lib',
  imports: [NavBarComponent],
  templateUrl: './lib.component.html',
  styleUrl: './lib.component.css'
})
export class LibComponent {

}
