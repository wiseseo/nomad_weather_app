import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black } from 'ansi-colors';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.yellowView}></View>
        <View style={styles.blueview}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    /*
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',*/
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  blueview: {
    flex:3,
    backgroundColor: "blue"
  }
});
