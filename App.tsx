import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider >
          <View style={styles.container}>
              {/* <LoginScreen /> */}
              {/* <TermsScreen /> */}
              <StarshipFeedScreen />
          </View>
      </PaperProvider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// eslint-disable-next-line import/no-default-export
export default App;