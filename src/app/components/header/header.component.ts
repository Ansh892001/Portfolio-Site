import { Component, HostListener, inject, signal } from "@angular/core";
import { PortfolioService } from "../../services/portfolio.service";
import { SectionNavService } from "../../services/section-nav.service";

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  private readonly portfolioService = inject(PortfolioService);
  private readonly sectionNav = inject(SectionNavService);

  data = this.portfolioService.data;

  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener("window:scroll")
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
    document.body.style.overflow = this.menuOpen() ? "hidden" : "";
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = "";
  }

  navigate(event: Event, href: string): void {
    if (!href.startsWith("#")) {
      return;
    }
    event.preventDefault();
    this.sectionNav.navigateTo(href);
  }
}
