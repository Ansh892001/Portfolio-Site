import { Component, inject } from "@angular/core";
import { PortfolioService } from "../../services/portfolio.service";
import { SectionNavService } from "../../services/section-nav.service";

@Component({
  selector: "app-hero",
  standalone: true,
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
})
export class HeroComponent {
  private readonly portfolioService = inject(PortfolioService);
  private readonly sectionNav = inject(SectionNavService);

  data = this.portfolioService.data;

  navigate(event: Event, href: string): void {
    if (!href.startsWith("#")) {
      return;
    }
    event.preventDefault();
    this.sectionNav.navigateTo(href);
  }
}
