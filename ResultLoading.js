import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function ResultLoading() {
    return(
        <View style={styles.container}>
            <Text style={styles.loading}>Loading</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    loading : {
        fontSize: 50
    }
  });