import { registerRootComponent } from 'expo';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, TextInput, ImageBackground, Dimensions, StatusBar, Text } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function Evaluate({ route, navigation }) {
    const [idNumber, setIdNumber] = useState('')
    const [available, setAvailable] = useState(true)
    const [point, setPoint] = useState([])
    const [pointLoading, setPointLoading] = useState(true)
    const {userIdx} = route.params

    const availableCheck = async () => {
        try {
          let response = await fetch('http://220.90.200.172:3000/analysis', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              insta_id: idNumber
            }),
          })
          let json = await response.json();
          if (json.statusCode == 200) {
            return navigation.navigate('Result', { 
                insta_id: idNumber,
                age: json.data.age, 
                gender: json.data.gender,
                region: json.data.region,
                interest: json.data.interest
             })
          }
          else {
            setAvailable(false)
            return
          }
        } catch (error) {
          console.error(error);
        }
      };

    const getPoint = () => {
        fetch(`http://220.90.200.172:3000/user/point/${userIdx}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => setPoint(json.data))
        .catch((error) => console.error('Error:', error))
        .finally(() => setPointLoading(false))
    }

    useEffect(() => {
        getPoint();
    }, [])

    return(
        <ImageBackground source={require('./assets/모든배경.jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <View style={styles.backToRankingView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.rankButton} source={require('./assets/evaluate/랭킹버튼.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.pointView}>
                <View style={styles.points}>
                    <Image style={styles.accumulatedPoints} source={require('./assets/points/채집된-물고기.png')}/>
                    <ImageBackground source={require('./assets/points/회색바.png')} style={styles.pointBar}>
                        {!pointLoading && (point.stack_point) >= 1 && <Image style={{width:33, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(1).png')}/>}
                        {!pointLoading && (point.stack_point) >= 2 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(2).png')}/>}
                        {!pointLoading && (point.stack_point) >= 3 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(3).png')}/>}
                        {!pointLoading && (point.stack_point) >= 4 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(4).png')}/>}
                        {!pointLoading && (point.stack_point) >= 5 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(5).png')}/>}
                        {!pointLoading && (point.stack_point) >= 6 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(6).png')}/>}
                        {!pointLoading && (point.stack_point) >= 7 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(7).png')}/>}
                        {!pointLoading && (point.stack_point) >= 8 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(8).png')}/>}
                        {!pointLoading && (point.stack_point) >= 8 && <Image style={{width:19, height:17}} source={require('./assets/points/파랑배경물고기_마지막-숫자표시공간.png')}/>}
                        {!pointLoading && (point.stack_point) >= 8 && <Text style={styles.pointNumber}>{point.stack_point}</Text>}
                    </ImageBackground>
                    <Image style={styles.availablePoints} source={require('./assets/points/사용가능한-물고기.png')}/>
                    <ImageBackground source={require('./assets/points/회색바.png')} style={styles.pointBar}>
                        {!pointLoading && (point.point) >= 1 && <Image style={{width:33, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(1).png')}/>}
                        {!pointLoading && (point.point) >= 2 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(2).png')}/>}
                        {!pointLoading && (point.point) >= 3 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(3).png')}/>}
                        {!pointLoading && (point.point) >= 4 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(4).png')}/>}
                        {!pointLoading && (point.point) >= 5 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(5).png')}/>}
                        {!pointLoading && (point.point) >= 6 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(6).png')}/>}
                        {!pointLoading && (point.point) >= 7 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(7).png')}/>}
                        {!pointLoading && (point.point) >= 8 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(8).png')}/>}
                        {!pointLoading && (point.point) >= 8 && <Image style={{width:19, height:17}} source={require('./assets/points/분홍배경물고기_마지막-숫자표시공간.png')}/>}
                        {!pointLoading && (point.point) >= 8 && <Text style={styles.pointNumber}>{point.point}</Text>}
                    </ImageBackground>
                </View>
                <Image style={{width:87, height: 82}} source={require('./assets/points/그물안에-물고기.png')}/> 
            </View>

            <View style={styles.idInputView}>
                <TextInput 
                    style={styles.idInput} 
                    onChangeText={idNumber => setIdNumber(idNumber)} 
                    value={idNumber} 
                    maxLength={15}
                    placeholder='분석하고 싶은 아이디를 입력해주세요 :-)'
                    placeholderTextColor='#595757' 
                />
                <Image style={available ? styles.transparent : styles.searchFail} source={require('./assets/evaluate/없는-아이디-표시.png')}/>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity onPress={availableCheck}>
                    <Image style={styles.evaluateButton} source={require('./assets/evaluate/분석하러가기-클릭버튼.png')}/> 
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    backToRankingView: {
        height:'10%',
        justifyContent: 'flex-end'
    },
    rankButton: {
        width:62, 
        height:65, 
        top: '20%',
    },
    pointView: {
        height: '8%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    points: {
        alignItems: 'flex-end',
        marginRight: width / 30
    },
    accumulatedPoints: {
        width:53, 
        height:9, 
        marginBottom:1, 
        marginRight:5
    },
    availablePoints: {
        width:69, 
        height:10, 
        marginBottom:1, 
        marginRight:5
    },
    pointBar: {
        width:265, 
        height:17, 
        marginBottom:4, 
        flexDirection:"row"
    },
    pointNumber: {
        fontSize: 12,
        position: 'absolute',
        right: '0%',
        bottom: '10%'
    },
    idInputView: {
        height:'59%',
        alignItems: 'center'
    },
    idInput: {
        backgroundColor: '#d8e1e3',
        height: 48,
        width: 322,
        paddingLeft: 10,
        borderRadius: 7,
        marginBottom: 25,
        marginTop: '58%',
        fontSize: 17 // 17이외의 fontSize는 ios에서 입력할 때 글자 크기 변하는 에러 존재
    },
    buttonView: {
        height: '23%',
        alignItems: 'center'
    },
    transparent: {
        width: 0,
        height: 0
    },
    searchFail: {
        width: 334,
        height: 20
    },
    evaluateButton: {
        width:188, 
        height:48
    }
});