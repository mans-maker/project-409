import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container}>
        <Text style={styles.footerText}>
            All rights reserved by Natural Goods, 2023{' '}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#9DC08B',
      marginBottom: 20,
    },
    footerText: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
      fontStyle: 'italic',
    },
  });