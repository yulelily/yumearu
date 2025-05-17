import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-spoiler-text',
  imports: [CommonModule],
  templateUrl: './spoiler-text.component.html',
  styleUrl: './spoiler-text.component.css'
})
export class SpoilerTextComponent {
 visible = signal(false);
}
