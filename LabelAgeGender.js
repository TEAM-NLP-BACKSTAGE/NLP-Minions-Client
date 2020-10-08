import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default function LabelAgeGender({ navigation }) {
    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <Text style={{fontSize: 50}}>Age/Gender</Text>
            <Button title='Back to Ranking' onPress={() => navigation.popToTop()}/>
            <Button title='Label more' onPress={() => navigation.navigate('LabelAgeGender')}/>
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