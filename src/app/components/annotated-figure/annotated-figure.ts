import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FigureMarker } from '../../content/content.types';

/**
 * An interactive annotated screenshot.
 *
 * Renders an image at its natural aspect ratio with numbered teal pins placed
 * over UI elements by percentage coordinates, plus a legend mapping each pin
 * number to its label. Hovering or keyboard-focusing a pin highlights its
 * matching legend row and vice-versa (cross-highlight), so prose can reference
 * "(6)" and the reader can find pin 6 on the image.
 */
@Component({
  selector: 'app-annotated-figure',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './annotated-figure.html',
  styleUrl: './annotated-figure.scss',
})
export class AnnotatedFigureComponent {
  readonly image = input.required<string>();
  readonly alt = input.required<string>();
  readonly caption = input<string>();
  readonly markers = input<FigureMarker[]>([]);

  /** The pin/legend-row number currently hovered or focused, if any. */
  readonly active = signal<number | null>(null);

  activate(n: number): void {
    this.active.set(n);
  }

  clear(): void {
    this.active.set(null);
  }
}
