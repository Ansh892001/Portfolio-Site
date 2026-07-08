import { Component, inject } from "@angular/core";
import { PortfolioService } from "../../services/portfolio.service";
import { SectionNavService } from "../../services/section-nav.service";

@Component({
  selector: "app-footer",
  standalone: true,
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  private readonly portfolioService = inject(PortfolioService);
  private readonly sectionNav = inject(SectionNavService);

  data = this.portfolioService.data;
  year = new Date().getFullYear();

  navigate(event: Event, href: string): void {
    if (!href.startsWith("#")) {
      return;
    }
    event.preventDefault();
    this.sectionNav.navigateTo(href);
  }
}
