import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ranking() {
    return(
        <View style={styles.container}>
            <Text>Ranking</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });