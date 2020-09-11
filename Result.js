import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ResultLoading from './ResultLoading'

export default function Result({ navigation }) {
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => { setIsLoading(false) }, 5000);

    if(isLoading) {
      return <ResultLoading/>
    }

    return(
        <View style={styles.container}>
            <Text style={{fontSize: 50}}>Result</Text>
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