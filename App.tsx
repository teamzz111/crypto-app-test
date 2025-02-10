import * as React from 'react';

import {PaperProvider} from 'react-native-paper';
import RootNavigation from './src/navigation/root';

export default function App() {
  return (
    <PaperProvider>
      <RootNavigation />
    </PaperProvider>
  );
}
