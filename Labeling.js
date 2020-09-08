import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Labeling({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 50}}>Labeling</Text>
            <Button title='Go Back' onPress={() => navigation.goBack()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });