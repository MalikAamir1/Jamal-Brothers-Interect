import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import {useSelector} from 'react-redux';

function SafeArea(props) {
  const isDark = useSelector(state => state.isDark);
  // const [isdark, setisDark] = useState(reducerData?.isDark?.isdark);

  // console.log(reducerData);

  //   useEffect(()=>{
  //     console.log(reducerData,'jdjdjj')
  //  },[reducerData])

  return (
    <SafeAreaView
      style={{
        backgroundColor: isDark.isdark
          ? COLORS.darkMode
          : COLORS.bgcolor,
        height: '100%',
        // marginBottom: 100
      }}>
      {props.children}
    </SafeAreaView>
  );
}

export default SafeArea;
