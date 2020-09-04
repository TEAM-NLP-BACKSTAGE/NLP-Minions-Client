import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import Loading from './Loading';
import Ranking from './Ranking';

const { width, height } = Dimensions.get('window')

// 버튼 누르면 ID 확인하고 넘어가는 기능 구현 필요
export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [idNumber, setIdNumber] = useState('')

  setTimeout(() => { setIsLoading(false) }, 3000);

  if(isLoading) {
    return <Loading/>
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content'></StatusBar>
      <TextInput 
        style={styles.idInput} 
        onChangeText={idNumber => setIdNumber(idNumber)} 
        value={idNumber} 
        maxLength={15}
        placeholder='아이디를 입력해주세요' 
      />
      <TouchableOpacity>
        <Image style={styles.loginButton} source={require('./assets/square.png')}/> 
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    height: height - 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
  idInput: {
    backgroundColor: '#aaa',
    height: 50,
    width: 250,
    paddingLeft: 10,
    marginRight: 10,
    fontSize: 17 // ios 입력할 때 글자 크기 변하는 에러 존재
  },
  loginButton: {
    width: 50,
    height: 50
  }
});
