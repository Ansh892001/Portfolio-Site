import { Injectable, signal } from '@angular/core';
import { PortfolioData } from '../models/portfolio.models';
import portfolioJson from '../../assets/data/portfolio.json';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly data = signal<PortfolioData>(portfolioJson as PortfolioData);
}
