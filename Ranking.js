import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ImageBackground, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function Ranking({ route, navigation }) {
    const [rank, setRank] = useState([])
    const [point, setPoint] = useState([])
    const [rankLoading, setRankLoading] = useState(true)
    const [pointLoading, setPointLoading] = useState(true)
    const {userIdx} = route.params

    const getPoint = () => {
        fetch(`http://220.90.200.172:3000/user/point/${userIdx}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => setPoint(json.data))
        .catch((error) => console.error('Error:', error))
        .finally(() => setPointLoading(false))
    }

    const getRank = () => {
        fetch('http://220.90.200.172:3000/home/rank', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => setRank(json.data))
        .catch((error) => console.error('Error:', error))
        .finally(() => setRankLoading(false))
    }

    useEffect(() => {
        getPoint();
        getRank();
    }, [])

    return(
        <ImageBackground source={require('./assets/모든배경.jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
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
                        {!pointLoading && (point.stack_point )>= 8 && <Text style={styles.pointNumber}>{point.stack_point}</Text>}
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

            <View style={styles.rankingView}>
                <View style={styles.rankOneView}>
                    <Image style={styles.fishOne} source={require('./assets/ranking/할아버지와-고래.png')}/>
                    <Image style={styles.rankOne} source={require('./assets/ranking/등수1.png')}/>
                    {!rankLoading && <Text style={styles.rankOneUser}>{rank[0].username} {rank[0].stack_point}</Text>}
                </View>      
                <View style={styles.rankTwoView}>
                    <Image style={styles.fishTwo} source={require('./assets/ranking/개복치.png')}/>
                    <Image style={styles.rankTwo} source={require('./assets/ranking/등수2.png')}/>
                    {!rankLoading && <Text style={styles.rankTwoUser}>{rank[1].username} {rank[1].stack_point}</Text>}
                </View>
                <View style={styles.rankThreeView}>
                    <Image style={styles.fishThree} source={require('./assets/ranking/니모.png')}/>
                    <Image style={styles.rankThree} source={require('./assets/ranking/등수3.png')}/>
                    {!rankLoading && <Text style={styles.rankThreeUser}>{rank[2].username} {rank[2].stack_point}</Text>}
                </View>
                <View style={styles.rankFourView}>
                    <Image style={styles.fishFour} source={require('./assets/ranking/분홍물고기.png')}/>
                    <Image style={styles.rankFour} source={require('./assets/ranking/등수4.png')}/>
                    {!rankLoading && <Text style={styles.rankFourUser}>{rank[3].username} {rank[3].stack_point}</Text>}
                </View>
                <View style={styles.rankFiveView}>
                    <Image style={styles.fishFive} source={require('./assets/ranking/멸치.png')}/>
                    <Image style={styles.rankFive} source={require('./assets/ranking/등수5.png')}/>
                    {!rankLoading && <Text style={styles.rankFiveUser}>{rank[4].username} {rank[4].stack_point}</Text>}
                </View>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => navigation.navigate('LabelCategory', { userIdx: userIdx })}>
                    <Image style={styles.button} source={require('./assets/ranking/라벨링-시작-버튼.png')}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Evaluate', { userIdx: userIdx })}>
                    <Image style={styles.button} source={require('./assets/ranking/분석시작-버튼.png')}/> 
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    pointView: {
        height: '15%',
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
    rankingView: {
        height: '69%'
    },
    rankOneView: {
        height: '65%'
    },
    rankTwoView: {
        height: '15%', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    rankThreeView: {
        height: '8%', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    rankFourView: {
        height: '8%', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    rankFiveView: {
        height: '4%', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    fishOne: {
        height:'100%', 
        width: '100%', 
        resizeMode: 'contain'
    },
    fishTwo: {
        height: '82%', 
        resizeMode: 'contain', 
        marginLeft: 17
    },
    fishThree: {
        height: '85%', 
        resizeMode: 'contain', 
        marginLeft: 23
    },
    fishFour: {
        height: '50%', 
        resizeMode: 'contain', 
        marginLeft: 45
    },
    fishFive: {
        height: '60%', 
        resizeMode: 'contain', 
        marginLeft: 47
    },
    rankOne: {
        width:193, 
        height:42, 
        position:'absolute', 
        bottom:'1%', 
        left:'43%'
    },
    rankTwo: {
        width:195, 
        height:36, 
        position:'absolute', 
        bottom:'30%', 
        left:'43%'
    },
    rankThree: {
        width:195, 
        height:30, 
        position:'absolute', 
        bottom:'40%', 
        left:'43%'
    },
    rankFour: {
        width:192, 
        height:28, 
        position:'absolute', 
        bottom:'45%', 
        left:'43%'
    },
    rankFive: {
        width:187, 
        height:25, 
        position:'absolute', 
        bottom:'20%', 
        left:'43%'
    },
    rankOneUser: {
        fontSize:30, 
        color:'#747474', 
        position:'absolute', 
        bottom:'0%',
        left:'43%', 
        backgroundColor:'#fff'
    },
    rankTwoUser: {
        fontSize:28, 
        color:'#747474', 
        position:'absolute', 
        bottom:'27%', 
        left:'43%', 
        backgroundColor:'#fff'
    },
    rankThreeUser: {
        fontSize:25, 
        color:'#747474', 
        position:'absolute', 
        bottom:'35%', 
        left:'43%', 
        backgroundColor:'#fff'
    },
    rankFourUser: {
        fontSize:22, 
        color:'#747474', 
        position:'absolute', 
        bottom:'40%', 
        left:'43%', 
        backgroundColor:'#fff'
    },
    rankFiveUser: {
        fontSize:20, 
        color:'#747474', 
        position:'absolute', 
        bottom:'15%', 
        left:'43%', 
        backgroundColor:'#fff'
    },
    buttonView: {
        height: '16%',
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: 17
    },
    button: {
        width: 142,
        height: 48,
        marginHorizontal: 16
    }
  });