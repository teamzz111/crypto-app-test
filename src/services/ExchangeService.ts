import {ICryptoData, IExchangeRate} from '../types/crypto';

export class ExchangeRate implements IExchangeRate {
  public readonly symbol: string;
  public readonly usdRate: number;
  public readonly name: string;
  public readonly change24h: number;
  public readonly volume24: number;
  public readonly id: string;

  constructor(cryptoData: ICryptoData) {
    this.symbol = cryptoData.symbol;
    this.usdRate = parseFloat(cryptoData.price_usd);
    this.name = cryptoData.name;
    this.change24h = parseFloat(cryptoData.percent_change_24h);
    this.volume24 = parseFloat(cryptoData.volume24);
    this.id = cryptoData.id;
  }

  public getUSDValue(amount: number = 1): number {
    return this.usdRate * amount;
  }

  public formatUSDValue(amount: number = 1): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(this.getUSDValue(amount));
  }

  public getExchangeRateText(): string {
    return `1 ${this.symbol} = ${this.formatUSDValue()}`;
  }

  public get24hChange(): string {
    return `${this.change24h > 0 ? '+' : ''}${this.change24h.toFixed(2)}%`;
  }

  public is24hChangePositive(): boolean {
    return this.change24h > 0;
  }

  public get24hVolume(): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(this.volume24);
  }
}
