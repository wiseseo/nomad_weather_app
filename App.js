import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black } from 'ansi-colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is Jihye Seo!</Text>
      <Text style={styles.text}>I can do it</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black'
  }
});
