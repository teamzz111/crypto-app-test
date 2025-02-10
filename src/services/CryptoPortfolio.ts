import {IExchangeRate} from '../types/crypto';

export class CryptoPortfolio {
  private holdings: Map<string, number>;

  constructor(defaultHoldings?: Map<string, number>) {
    this.holdings = defaultHoldings || new Map();
  }

  public addHolding(cryptoId: string, amount: number): void {
    const currentAmount = this.holdings.get(cryptoId) || 0;
    this.holdings.set(cryptoId, currentAmount + amount);
  }

  public getHolding(cryptoId: string): number {
    return this.holdings.get(cryptoId) || 0;
  }

  public calculateTotalValue(cryptos: IExchangeRate[]): number {
    return cryptos.reduce((total, crypto) => {
      const amount = this.getHolding(crypto.symbol);
      return total + crypto.getUSDValue(amount);
    }, 0);
  }

  public formatTotalValue(cryptos: IExchangeRate[]): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(this.calculateTotalValue(cryptos));
  }
}
