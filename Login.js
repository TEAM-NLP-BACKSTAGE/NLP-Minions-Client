import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Dimensions, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';

import Loading from './Loading';

const { width, height } = Dimensions.get('window')

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)
  const [idNumber, setIdNumber] = useState('')
  const [identified, setIdentified] = useState(true)

  const loginCheck = async () => {
    try {
      let response = await fetch('http://220.90.200.172:3000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: idNumber
        }),
      })
      let json = await response.json();
      if (json.statusCode == 200) {
        return navigation.replace('Ranking', { userIdx: json.data.user_idx })
      }
      else {
        setIdentified(false)
        return
      }
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(() => { setIsLoading(false) }, 3000);

  if(isLoading) {
    return <Loading/>
  }

  return (
    <ImageBackground source={require('./assets/모든배경.jpg')} style={styles.container}>
      <StatusBar barStyle='light-content'></StatusBar>
      <View style={styles.idInputView}>
        <TextInput 
          style={styles.idInput} 
          onChangeText={idNumber => setIdNumber(idNumber)} 
          value={idNumber} 
          maxLength={15}
          placeholder='아이디를 입력해주세요 :-)'
          placeholderTextColor='#595757'
          autoCorrect={false}
        />
        <TouchableOpacity onPress={loginCheck}>
          <Image style={styles.loginButton} source={require('./assets/login/클릭-창.png')}/> 
        </TouchableOpacity>
      </View>
      <Image style={identified ? styles.transparent : styles.loginFail} source={require('./assets/login/로그인-실패-창.png')}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  idInputView: {
    marginTop: height / 2 - 25,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  idInput: {
    backgroundColor: '#d8e1e3',
    height: 48,
    width: 250,
    paddingLeft: 10,
    marginRight: 13,
    fontSize: 17, // 17이외의 fontSize는 ios에서 입력할 때 글자 크기 변하는 에러 존재
    borderRadius: 7
  },
  loginButton: {
    width: 55,
    height: 50
  },
  transparent: {
    width: 0,
    height: 0
  },
  loginFail: {
    width: 318,
    height: 25
  }
});