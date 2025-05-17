import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
 imgSrc = input.required<string>();
 caption = input<string>();
}
