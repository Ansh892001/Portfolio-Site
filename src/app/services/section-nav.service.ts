import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class SectionNavService {
  private readonly loadRequested = signal(false);

  /** When true, all deferred sections render immediately. */
  readonly shouldLoad = this.loadRequested.asReadonly();

  /** Force-load deferred sections, then smooth-scroll to the target. */
  navigateTo(hash: string): void {
    this.loadRequested.set(true);
    this.scrollWhenReady(hash);
  }

  private scrollWhenReady(hash: string, attempt = 0): void {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (attempt < 40) {
      requestAnimationFrame(() => this.scrollWhenReady(hash, attempt + 1));
    }
  }
}
