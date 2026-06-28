import { Routes } from '@angular/router';
import { CHAPTERS } from './content/chapters';
import { ChapterPageComponent } from './pages/chapter-page/chapter-page.component';

/**
 * One route per chapter. The route path equals the chapter id, and each route
 * passes that id through `data` so ChapterPageComponent can resolve it.
 * 'home' is reachable at both '' and '/home'.
 */
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  ...CHAPTERS.map((chapter) => ({
    path: chapter.id,
    component: ChapterPageComponent,
    data: { id: chapter.id },
    title: `${chapter.title} — Intrinsic Academy`,
  })),
  { path: '**', redirectTo: 'home' },
];
