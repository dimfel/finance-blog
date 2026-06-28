import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CHAPTERS } from './content/chapters';

/**
 * Application shell: a thin top header bar, a collapsible left sidebar listing
 * all chapters with active-route highlighting, and the routed content area.
 */
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'Intrinsic Academy';
  protected readonly chapters = CHAPTERS;

  /** Mobile sidebar open/closed state. Desktop ignores this. */
  protected readonly menuOpen = signal(false);

  constructor(router: Router) {
    // Close the mobile menu after any successful navigation.
    router.events.subscribe(() => this.menuOpen.set(false));
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
