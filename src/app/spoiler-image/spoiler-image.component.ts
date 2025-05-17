import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-spoiler-image',
  imports: [CommonModule],
  templateUrl: './spoiler-image.component.html',
  styleUrl: './spoiler-image.component.css'
})
export class SpoilerImageComponent {
 visible = signal(false);
 imgSrc = input<string>("");
}
