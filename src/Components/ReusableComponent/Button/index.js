import React, {useState} from 'react';
import {Button, Text} from 'react-native-paper';
import {ImageBackground, Pressable, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function ButtonComp(props) {
  let {btnText, press} = props;

  return (
    <LinearGradient
    colors={['#00FF00', '#00CC00']}

      start={{x: 0.5, y: -5}}
      end={{x: 0.4, y: 4}}
      style={{
        flex: 1,
        // padding: 13,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        // boxShadow: '0px 18px 40px -12px rgba(249, 180, 1, 0.35)',
      }}>
      <TouchableOpacity
        onPress={press}
        style={{
          flex: 1,
          width: '100%',
          padding: 12,
          alignItems: 'center',
          height: '50%',
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          {btnText}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
    // </View>
  );
}

export default ButtonComp;
