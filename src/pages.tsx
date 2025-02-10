import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    marginLeft: 12,
    flex: 1,
  },
  userName: {
    fontWeight: '600',
  },
  welcomeBack: {
    opacity: 0.7,
  },
  notificationIcon: {
    marginLeft: 'auto',
  },
  portfolioCard: {
    margin: 16,
    marginTop: 8,
    borderRadius: 12,
  },
  portfolioLabel: {
    opacity: 0.7,
  },
  amount: {
    fontWeight: 'bold',
    marginVertical: 8,
  },
  profitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profitPercentage: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  profitAmount: {
    opacity: 0.7,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    borderRadius: 8,
  },
  buttonContent: {
    height: 48,
  },
  buttonLabel: {
    fontSize: 16,
  },
  categoryCard: {
    margin: 16,
    marginTop: 0,
    borderRadius: 12,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categorySubtitle: {
    opacity: 0.7,
    marginTop: 2,
  },
  assetsList: {
    gap: 12,
  },
  assetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  assetInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  darkIcon: {
    backgroundColor: '#000',
  },
  blueIcon: {
    backgroundColor: '#2196F3',
  },
  divider: {
    opacity: 0.1,
  },
  assetName: {
    fontWeight: '500',
  },
  zeroAssets: {
    opacity: 0.7,
  },
  watchlistContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  watchlistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cryptoList: {
    flexDirection: 'row',
    gap: 12,
  },
  cryptoCard: {
    flex: 1,
    borderRadius: 12,
  },
  bitcoinIcon: {
    backgroundColor: '#F7931A',
    marginBottom: 12,
  },
  ethereumIcon: {
    backgroundColor: '#627EEA',
    marginBottom: 12,
  },
  cryptoName: {
    fontWeight: '500',
    marginBottom: 4,
  },
  cryptoPrice: {
    fontWeight: '600',
    marginBottom: 4,
  },
  positiveChange: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  negativeChange: {
    color: '#F44336',
    fontWeight: '600',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
