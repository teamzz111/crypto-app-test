export interface ICoinLoreResponse {
  data: ICryptoData[];
  info: {
    coins_num: number;
    time: number;
  };
}

export interface ICryptoData {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  market_cap_usd: string;
  volume24: string;
  volume24_native: string;
  csupply: string;
  price_btc: string;
  tsupply: string | null;
  msupply: string | null;
}

export interface IExchangeRate {
  id: string;
  symbol: string;
  usdRate: number;
  name: string;
  change24h: number;
  volume24: number;
  getUSDValue(amount?: number): number;
  formatUSDValue(amount?: number): string;
  getExchangeRateText(): string;
  get24hChange(): string;
  is24hChangePositive(): boolean;
  get24hVolume(): string;
}

export interface IPortfolio {
  holdings: Map<string, number>;
  addHolding(cryptoId: string, amount: number): void;
  getHolding(cryptoId: string): number;
  calculateTotalValue(cryptos: IExchangeRate[]): number;
  formatTotalValue(cryptos: IExchangeRate[]): string;
}

export interface IExchangeCardProps {
  exchangeRate: IExchangeRate;
  onPress?: () => void;
}

export interface ICryptoListProps {
  rates: IExchangeRate[];
  onSelectCrypto: (crypto: IExchangeRate) => void;
  onRefresh?: () => void;
  isLoading?: boolean;
}

export interface ICryptoDetailsProps {
  route: {
    params: {
      crypto: IExchangeRate;
    };
  };
  navigation: any;
}

export interface ICryptoDetails extends ICryptoData {
  rank: number;
  price_btc: string;
  market_cap_usd: string;
  csupply: string;
  tsupply: string;
  msupply: string;
}
