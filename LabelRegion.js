import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function LabelRegion({ route, navigation }) {
    const [point, setPoint] = useState([])
    const [pointLoading, setPointLoading] = useState(true)
    const [region, setRegion] = useState('')
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

    useEffect(() => {
        getPoint();
    }, [])

    return(
        <ImageBackground source={require('./assets/모든배경.jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <View style={styles.backToRankingView}>
                <TouchableOpacity onPress={() => navigation.popToTop()}>
                    <Image style={styles.rankButton} source={require('./assets/label/랭킹버튼.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.pointView}>
                <View style={styles.points}>
                    <Image style={styles.accumulatedPoints} source={require('./assets/points/채집된-물고기.png')}/>
                    <ImageBackground source={require('./assets/points/회색바.png')} style={styles.pointBar}>
                        {!pointLoading && (point[0].point) >= 1 && <Image style={{width:33, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(1).png')}/>}
                        {!pointLoading && (point[0].point) >= 2 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(2).png')}/>}
                        {!pointLoading && (point[0].point) >= 3 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(3).png')}/>}
                        {!pointLoading && (point[0].point) >= 4 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(4).png')}/>}
                        {!pointLoading && (point[0].point) >= 5 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(5).png')}/>}
                        {!pointLoading && (point[0].point) >= 6 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(6).png')}/>}
                        {!pointLoading && (point[0].point) >= 7 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(7).png')}/>}
                        {!pointLoading && (point[0].point) >= 8 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(8).png')}/>}
                        {!pointLoading && (point[0].point) >= 8 && <Image style={{width:19, height:17}} source={require('./assets/points/파랑배경물고기_마지막-숫자표시공간.png')}/>}
                        {!pointLoading && (point[0].point) >= 8 && <Text style={styles.pointNumber}>{point[0].point}</Text>}
                    </ImageBackground>
                    <Image style={styles.availablePoints} source={require('./assets/points/사용가능한-물고기.png')}/>
                    <ImageBackground source={require('./assets/points/회색바.png')} style={styles.pointBar}>
                        {!pointLoading && (point[0].stack_point) >= 1 && <Image style={{width:33, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(1).png')}/>}
                        {!pointLoading && (point[0].stack_point) >= 2 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(2).png')}/>}
                        {!pointLoading && (point[0].stack_point) >= 3 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(3).png')}/>}
                        {!pointLoading && (point[0].stack_point) >= 4 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(4).png')}/>}
                        {!pointLoading && (point[0].stack_point) >= 5 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(5).png')}/>}
                        {!pointLoading && (point[0].stack_point) >= 6 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(6).png')}/>}
                        {!pointLoading && (point[0].stack_point) >= 7 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(7).png')}/>}
                        {!pointLoading && (point[0].stack_point) >= 8 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(8).png')}/>}
                        {!pointLoading && (point[0].stack_point) >= 8 && <Image style={{width:19, height:17}} source={require('./assets/points/분홍배경물고기_마지막-숫자표시공간.png')}/>}
                        {!pointLoading && (point[0].stack_point) >= 8 && <Text style={styles.pointNumber}>{point[0].stack_point}</Text>}
                    </ImageBackground>
                </View>
                <Image style={{width:87, height: 82}} source={require('./assets/points/그물안에-물고기.png')}/> 
            </View>

            <View style={styles.contentView}>
                <Image style={styles.contentContainer} source={require('./assets/label/중간스퀘어.jpg')}/>
                <Text style={styles.idText}>@dlwlrma</Text>

                <ScrollView style={styles.textView}>
                    <View style={styles.questionView}>
                        <Image style={{width: 36, height: 17}} source={require('./assets/label/게시글용(보라물고기1).png')}/>
                        <View style={styles.question}>
                            <Text style={styles.questionId}>@dlwlrma</Text>
                            <Image style={{width: 135, height: 13}} source={require('./assets/label/게시글용-질문.png')}/>
                        </View>
                        <Image style={{width: 38, height: 17}} source={require('./assets/label/게시글용(보라물고기2).png')}/>
                    </View>
                    <Text style={styles.contentText}>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</Text>
                    <Image style={styles.divisionLine} source={require('./assets/label/구분선.png')}/>

                    <View style={styles.questionView}>
                        <Image style={{width: 36, height: 17}} source={require('./assets/label/게시글용(노랑물고기1).png')}/>
                        <View style={styles.question}>
                            <Text style={styles.questionId}>@dlwlrma</Text>
                            <Image style={{width: 147, height: 13}} source={require('./assets/label/해시태그용-질문.png')}/>
                        </View>
                        <Image style={{width: 38, height: 17}} source={require('./assets/label/해시태그용(노랑물고기2).png')}/>
                    </View>
                    <Text style={styles.contentText}>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</Text>
                    <Image style={styles.divisionLine} source={require('./assets/label/구분선.png')}/>

                    <View style={styles.questionView}>
                        <Image style={{width: 36, height: 17}} source={require('./assets/label/지역용(주황색물고기1).png')}/>
                        <View style={styles.question}>
                            <Text style={styles.questionId}>@dlwlrma</Text>
                            <Image style={{width: 133, height: 16}} source={require('./assets/label/지역-질문.png')}/>
                        </View>
                        <Image style={{width: 38, height: 17}} source={require('./assets/label/지역용(주황색물고기2).png')}/>
                    </View>
                    <Text style={styles.contentText}>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</Text>
                    <Image style={styles.divisionLine} source={require('./assets/label/구분선.png')}/>
                </ScrollView>
            </View>

            <View style={styles.buttonView}>
                <View style={styles.buttons}>
                    <View style={region == '수도권' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setRegion('수도권')} hitSlop={styles.buttonTouch}>
                            <Text style={region == '수도권' ? styles.clickedButtonText : styles.buttonText}>수도권</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={region == '충청' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setRegion('충청')} hitSlop={styles.buttonTouch}>
                            <Text style={region == '충청' ? styles.clickedButtonText : styles.buttonText}>충청</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={region == '강원' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setRegion('강원')} hitSlop={styles.buttonTouch}>
                            <Text style={region == '강원' ? styles.clickedButtonText : styles.buttonText}>강원</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.buttons}>
                
                    <View style={region == '전라' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setRegion('전라')} hitSlop={styles.buttonTouch}>
                            <Text style={region == '전라' ? styles.clickedButtonText : styles.buttonText}>전라</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={region == '경상' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setRegion('경상')} hitSlop={styles.buttonTouch}>
                            <Text style={region == '경상' ? styles.clickedButtonText : styles.buttonText}>경상</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={region == '해당없음' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setRegion('해당없음')} hitSlop={styles.buttonTouch}>
                            <Text style={region == '해당없음' ? styles.clickedButtonText : styles.buttonText}>해당없음</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('LabelRegion')}>
                    <Image style={{width: 52, height: 49}} source={require('./assets/label/넥스트하트버튼.png')}/>
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
        width: 62, 
        height: 65, 
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
        width: 53, 
        height: 9, 
        marginBottom: 1, 
        marginRight: 5
    },
    availablePoints: {
        width: 69, 
        height: 10, 
        marginBottom: 1, 
        marginRight: 5
    },
    pointBar: {
        width: 265, 
        height: 17, 
        marginBottom: 4, 
        flexDirection:"row"
    },
    pointNumber: {
        fontSize: 12,
        position: 'absolute',
        right: '0%',
        bottom: '10%'
    },
    contentView: {
        height: '55%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: '5%'
    },
    contentContainer: {
        height: '100%', 
        width: '100%', 
        resizeMode: 'contain'
    },
    idText: {
        fontSize: 20, 
        position: 'absolute', 
        top: '18%', 
        left: '44%', 
        color: '#D04C5B'
    },
    textView: {
        backgroundColor: '#f3f4f5', 
        position:'absolute', 
        height: '63%', 
        bottom: '7%', 
        width: '85%'
    },
    questionView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        marginVertical: '3%', 
        marginHorizontal: '1%'
    },
    question: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    questionId: {
        color: '#D04C5B', 
        fontSize: 13
    },
    contentText: {
        marginHorizontal: '1%'
    },
    divisionLine: {
        width: '100%', 
        resizeMode: 'contain', 
        marginTop: '3%'
    },
    buttonView: {
        height: '21%', 
        marginHorizontal: '5%', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row', 
        height: '27%', 
        width: '100%',
        backgroundColor: '#d8e2e3',
        borderRadius: 7
    },
    button: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d8e2e3',
        borderRadius: 7
    },
    clickedButton: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A0C0F9',
        borderRadius: 7
    },
    buttonText: {
        fontSize: 18, 
        color: '#333333',
        fontWeight: '500'
    },
    clickedButtonText: {
        fontSize: 18, 
        color: '#D04C5B',
        fontWeight: '500'
    },
    buttonTouch: {
        top: 20, 
        bottom: 20, 
        left: 20, 
        right: 20
    }
  });