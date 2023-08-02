import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Navigation from './src/Navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
