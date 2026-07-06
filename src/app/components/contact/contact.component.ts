import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly portfolioService = inject(PortfolioService);

  data = this.portfolioService.data;
  submitted = signal(false);

  form = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(): void {
    if (this.form.name && this.form.email && this.form.message) {
      this.submitted.set(true);
    }
  }
}
