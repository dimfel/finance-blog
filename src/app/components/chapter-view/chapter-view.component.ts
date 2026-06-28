import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Chapter } from '../../content/content.types';
import { AnnotatedFigureComponent } from '../annotated-figure/annotated-figure';

/**
 * Shared renderer for a single chapter. This is how EVERY chapter is
 * displayed — content agents only produce `Chapter` data, never templates.
 *
 * Renders, in order:
 *   1. <h1> title (+ optional subtitle)
 *   2. the "Summary" callout box
 *   3. the body blocks (h2/h3/p/small/ul/ol/note/table)
 */
@Component({
  selector: 'app-chapter-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AnnotatedFigureComponent],
  templateUrl: './chapter-view.component.html',
  styleUrl: './chapter-view.component.scss',
})
export class ChapterViewComponent {
  readonly chapter = input.required<Chapter>();
}
