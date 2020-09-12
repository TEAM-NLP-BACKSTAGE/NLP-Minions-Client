import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native';

import ResultLoading from './ResultLoading'

export default function Result({ navigation }) {
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => { setIsLoading(false) }, 1000);

    if(isLoading) {
      return <ResultLoading/>
    }

    return(
      <ImageBackground source={require('./assets/result/결과화면-배경.jpg')} style={styles.container}>
          <StatusBar barStyle='light-content'></StatusBar>
          <View style={styles.showId}>
            <Image style={{width:40, height:25}} source={require('./assets/result/보라물고기-왼쪽.png')}/>
            <Text style={{fontSize:30, color:'#747474', marginHorizontal: 10, color:'#D04C5B'}}>@ Whaleing</Text>
            <Image style={{width:40, height:25, marginRight: 10}} source={require('./assets/result/님은.png')}/>
            <Image style={{width:37, height:20}} source={require('./assets/result/보라물고기-오른쪽.png')}/>
          </View>
          
          <View style={styles.resultView}>
            <Image style={{width:226, height:300, position:'absolute', top:170, left:130}} source={require('./assets/result/아리.png')}/>
            <Image style={{width:77, height:85, position:'absolute', top:385, left: 85}} source={require('./assets/result/반려동물-고양이.png')}/>
            <Image style={{width:120, height:120, position:'absolute', top:30, left: 40}} source={require('./assets/result/수정-물방울(나이).png')}/>
            <Text style={{fontSize:30, color:'#767677', position:'absolute', top:70, left: 65}}>10대</Text>
            <Image style={{width:87, height:87, position:'absolute', top:280, left: 30}} source={require('./assets/result/수정물방울(관심사).png')}/>
            <Text style={{fontSize:16, color:'#767677', position:'absolute', top:312, left: 43}}>반려동물</Text>
            <Image style={{width:91, height:88, position:'absolute', top:60, left: 240}} source={require('./assets/result/수정물방울(성별).png')}/>
            <Text style={{fontSize:27, color:'#767677', position:'absolute', top:87, left: 257}}>여자</Text>
            <Image style={{width:100, height:105, position:'absolute', top:480, left: 100}} source={require('./assets/result/수정물방울(지역).png')}/>
            <Text style={{fontSize:27, color:'#767677', position:'absolute', top:515, left: 110}}>수도권</Text>
            <Image style={{width:118, height:115, position:'absolute', top:430, left: 280}} source={require('./assets/result/수정물방울(직업).png')}/>
            <Text style={{fontSize:35, color:'#767677', position:'absolute', top:465, left: 305}}>학생</Text>
          </View>
          
          <View style={styles.completeView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={{width:147, height:52, marginRight:10}} source={require('./assets/result/분석완료버튼.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{width:32, height:32}} source={require('./assets/result/공유버튼.png')}/>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      // alignItems: 'center',
    },
    showId: {
      flexDirection: 'row',
      marginTop: 110,
      alignItems: 'center',
      justifyContent: 'center'
    },
    resultView: {
      alignItems: 'center',
      flex: 1
    },
    completeView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', 
      marginLeft: 27,
      marginBottom: 90
    }
  });