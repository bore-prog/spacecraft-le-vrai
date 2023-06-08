import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { Header } from "./src/components/Header";

const App = () => {
  return (
    <PaperProvider >
        <View style={styles.container}>
            <Header title="SpaceCraft"/>
            {/* <LoginScreen />
            <TermsScreen /> */}
            {/* <StarshipFeedScreen /> */}
            
        </View>
    </PaperProvider>
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