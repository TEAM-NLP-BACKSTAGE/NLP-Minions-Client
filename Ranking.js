import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function Ranking({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.topColumn}>
                <View style={styles.points}>
                    <Text>채집된 물고기</Text>
                    <Text>사용 가능한 물고기</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.end} source={require('./assets/square.png')}/> 
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
            </View>
            <View style={styles.bottomColumn}>
                <TouchableOpacity onPress={() => navigation.navigate('Labeling')}>
                    <Image style={styles.button} source={require('./assets/square.png')}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Evaluate')}>
                    <Image style={styles.button} source={require('./assets/square.png')}/> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    topColumn: {
        flexDirection: 'row',
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    points: {
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40,
        width: 220,
        height: 60
    },
    end: {
        width: 50,
        height: 50
    },
    content: {
        backgroundColor: '#999', 
        width: width - 50,
        marginTop: 30,
        height: 600
    },
    bottomColumn: {
        flexDirection: 'row',
        width: width - 150,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40
    },
    button: {
        width: 50,
        height: 50
    }
  });