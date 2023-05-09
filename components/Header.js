import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Natural Goods</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#9DC08B',
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: 'black',
      textAlign: 'center',
    },
  });