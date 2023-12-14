import { Pressable, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Navigation from './src/Navigaiton/routes'
// import dynamicLinks from '@react-native-firebase/dynamic-links';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const App = () => {

  // useEffect(() => {
  //   dynamicLinks()
  //     .getInitialLink()
  //     .then(link => {
  //       console.log('Background link Handling:', link)
  //       // if (link.url === 'https://invertase.io/offer') {
  //       //   // ...set initial route as offers screen
  //       // }
  //     }).catch(error => {
  //       console.log('error:', error)
  //     })
  // }, []);

  // const HandleDeepLinking = () => {
  //   const {navigate} = useNavigation()
  //   const handleDynamicLinks = async (link) => {
  //     console.log('Foreground link handling:', link)
  //     let productId = link.url.split('=').pop()
  //     console.log('productId:', productId,)
  //       navigate('PostDetail', { productId: productId })
  //   }
  //   useEffect(() => {
  //     const unsubscribe = dynamicLinks().onLink(handleDynamicLinks)
  //     return () => unsubscribe()
  //   }, [])

  //   return null
  // }

  return (
    <NavigationContainer>
      {/* <HandleDeepLinking /> */}
      <Navigation />
    </NavigationContainer>
  )
}

export default App




