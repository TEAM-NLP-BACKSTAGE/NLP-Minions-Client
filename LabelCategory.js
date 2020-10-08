import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default function LabelCategory({ navigation }) {
    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <Text style={{fontSize: 50}}>Labeling</Text>
            <Button title='Age/Gender' onPress={() => navigation.navigate('LabelAgeGender')}/>
            <Button title='Region' onPress={() => navigation.navigate('LabelRegion')}/>
            <Button title='Hobby' onPress={() => navigation.navigate('LabelHobby')}/>
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