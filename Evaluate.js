import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function Evaluate({ navigation }) {
    const [idNumber, setIdNumber] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.topColumn}>
                <TouchableOpacity onPress={() => navigation.navigate('Ranking')}>
                    <Image style={styles.backButton} source={require('./assets/square.png')}/> 
                </TouchableOpacity>
                <View style={styles.points}>
                    <Text>채집된 물고기</Text>
                    <Text>사용 가능한 물고기</Text>
                </View>
            </View>
            <View style={styles.idView}>
                <TextInput 
                    style={styles.idInput} 
                    onChangeText={idNumber => setIdNumber(idNumber)} 
                    value={idNumber} 
                    maxLength={15}
                    placeholder='아이디를 입력해주세요' 
                />
                <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                    <Image style={styles.searchButton} source={require('./assets/square.png')}/> 
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
        marginLeft: 40,
        width: 220,
        height: 60
    },
    backButton: {
        width: 50,
        height: 50
    },
    idView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    idInput: {
        backgroundColor: '#aaa',
        height: 50,
        width: 250,
        paddingLeft: 10,
        marginTop: 300,
        fontSize: 17 // ios 입력할 때 글자 크기 변하는 에러 존재
      },
      searchButton: {
        width: 50,
        height: 50,
        marginBottom: 100
      }
});