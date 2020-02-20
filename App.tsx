import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from './src/CustomHeader';
import SwipeCards from './src/SwipeCards';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <SwipeCards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
