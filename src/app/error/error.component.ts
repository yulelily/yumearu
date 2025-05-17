import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContentComponent } from "../content/content.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  imports: [NavBarComponent, ContentComponent, RouterLink, CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit {
  visible = false;
  items = ["•", "•", "•", "Segmentation fault", "(core dumped)"];

  ngOnInit() {
    setTimeout(() => {
      this.visible = true;
    }, 100);
  }
}