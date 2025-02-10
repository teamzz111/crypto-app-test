import {ICryptoData, IExchangeRate} from '../types/crypto';
import {CryptoDetails} from './CryptoDetailts';
import {ExchangeRate} from './ExchangeService';

export class CoinLoreAPI {
  private static readonly BASE_URL: string = 'https://api.coinlore.net/api';

  public static async getExchangeRates(
    start: number = 0,
    limit: number = 10,
  ): Promise<IExchangeRate[]> {
    try {
      const response = await fetch(
        `${this.BASE_URL}/tickers/?start=${start}&limit=${limit}`,
      );
      const data = await response.json();
      return data.data.map((crypto: ICryptoData) => new ExchangeRate(crypto));
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      throw error;
    }
  }

  public static async searchCrypto(query: string): Promise<IExchangeRate[]> {
    try {
      const allRates = await this.getExchangeRates(0, 100);
      return allRates.filter(
        rate =>
          rate.name.toLowerCase().includes(query.toLowerCase()) ||
          rate.symbol.toLowerCase().includes(query.toLowerCase()),
      );
    } catch (error) {
      console.error('Error searching cryptos:', error);
      throw error;
    }
  }

  public static async getCryptoDetails(id: string) {
    try {
      const response = await fetch(`${this.BASE_URL}/ticker/?id=${id}`);
      const data = await response.json();

      if (!data || data.length === 0) {
        throw new Error('Cryptocurrency not found');
      }

      return new CryptoDetails(data[0]);
    } catch (error) {
      console.error('Error fetching crypto details:', error);
      throw error;
    }
  }
}
