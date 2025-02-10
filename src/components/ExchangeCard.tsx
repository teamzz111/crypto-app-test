import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {IExchangeCardProps} from '../types/crypto';

export class ExchangeCard extends React.PureComponent<IExchangeCardProps> {
  public render(): React.ReactNode {
    const {exchangeRate, onPress} = this.props;

    return (
      <Card style={styles.card} onPress={onPress}>
        <Card.Content>
          <View style={styles.header}>
            <Text variant="titleLarge">{exchangeRate.symbol}</Text>
            <Text variant="bodyMedium">{exchangeRate.name}</Text>
          </View>

          <View style={styles.rateContainer}>
            <Text variant="headlineMedium" style={styles.rate}>
              {exchangeRate.getExchangeRateText()}
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text variant="bodySmall">24h Change</Text>
              <Text
                style={[
                  styles.changeText,
                  exchangeRate.is24hChangePositive()
                    ? styles.positive
                    : styles.negative,
                ]}>
                {exchangeRate.get24hChange()}
              </Text>
            </View>

            <View style={styles.stat}>
              <Text variant="bodySmall">24h Volume</Text>
              <Text variant="bodyMedium">{exchangeRate.get24hVolume()}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
  },
  header: {
    marginBottom: 12,
  },
  rateContainer: {
    alignItems: 'center',
    marginVertical: 16,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  rate: {
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  stat: {
    alignItems: 'center',
  },
  changeText: {
    fontWeight: 'bold',
  },
  positive: {
    color: '#4CAF50',
  },
  negative: {
    color: '#F44336',
  },
});
