import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ChapterViewComponent } from '../../components/chapter-view/chapter-view.component';
import { CHAPTERS, getChapterIndex } from '../../content/chapters';

/**
 * A single chapter route. Resolves the chapter id from route data, renders it
 * through the shared ChapterViewComponent, and appends prev/next navigation.
 */
@Component({
  selector: 'app-chapter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChapterViewComponent, RouterLink],
  templateUrl: './chapter-page.component.html',
  styleUrl: './chapter-page.component.scss',
})
export class ChapterPageComponent {
  private readonly route = inject(ActivatedRoute);

  /** The chapter id comes from the route `data.id`. */
  private readonly chapterId = toSignal(
    this.route.data.pipe(map((d) => d['id'] as string)),
    { initialValue: this.route.snapshot.data['id'] as string },
  );

  protected readonly index = computed(() => getChapterIndex(this.chapterId()));

  protected readonly chapter = computed(() => CHAPTERS[this.index()]);

  protected readonly prev = computed(() => {
    const i = this.index();
    return i > 0 ? CHAPTERS[i - 1] : undefined;
  });

  protected readonly next = computed(() => {
    const i = this.index();
    return i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : undefined;
  });
}
