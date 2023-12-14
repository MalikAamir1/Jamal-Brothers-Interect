import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from 'src/Screens/Onboarding';
import ProfileDetails from 'src/Screens/ProfileDetails';
import Gender from 'src/Screens/Gender';
import Interest from 'src/Screens/Interest';
import Setting from 'src/DrawerScreens/Setting';
import Email from 'src/Screens/Email';
import ChangePassword from 'src/Screens/ChangePassword';
import EditProfile from 'src/Screens/EditProfile';
import SuccessViaEmail from 'src/Screens/SuccessViaEmail';
import Friends from 'src/Screens/Friends';
import Help from 'src/Screens/Help&Support';
import Notification from 'src/Screens/Notification';
import SpouseInvite from 'src/Screens/SpouseInvite';
// import ExpiredViaOtp from 'src/Screens/ExpiredViaOtp';
// import SuccessViaOtp from 'src/Screens/SuccessViaOtp';
import VerifyEmail from 'src/Screens/VerifyEmail';
import ViaEmail from 'src/Screens/ViaEmail';
// import Viaotp from 'src/Screens/ViaOtp';
import PartnerInfo from '../../Screens/PartnerInfo';
import Match from '../../Screens/Match';
import Profile from '../../Screens/Profile';
import ViewProfile from '../../Screens/ViewProfile/index.';
import Families from '../../Screens/Families';
import MoreEvents from '../../Screens/MoreEvents';
import AddEvent from '../../Screens/AddEvent';
import BottomTab from '../BottomTab';
import CreateEvent from '../../Screens/CreateEvent';
import Messages from '../../Screens/Messages';
import Chat from '../../Screens/Chat';
import EventDetails from '../../Screens/EventDetails';
import Phone from '../../Screens/Phone';
// import Otp from '../../Screens/OTP';
import AddAlbum from '../../Screens/AddAlbum';
import CreateAlbum from '../../Screens/CreateAlbum';
import ViewAlbum from '../../Screens/ViewAlbum';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import Splash from '../../Screens/Splash';
import DummyPage from '../../Screens/DummyPage';
import GalleryMedia from '../../Screens/GalleryMedia';
import ViewImages from '../../Screens/ViewImage';
import Map from '../../Components/Map';
// import SignUp from '../../Screens/Signup';
import {Login} from '../../Screens/Login';
import {SignUp} from '../../Screens/SignUp';
import {ForgotPassword} from '../../Screens/ForgotPassword';
import {OtpScreen} from '../../Components/OtpScreen';
import {TermofServices} from '../../Screens/TermsOfServices';
import {PasswordChange} from '../../Screens/PasswordChange';
import {ProfileCreateStart} from '../../Screens/ProfileCreate';
import MainScreen from '../../Screens/Main';
// import {ProfileCreate} from '../../Screens/ProfileCreate';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  // const reducerData = useSelector(state => state);
  const AuthReducer = useSelector(state => state.AuthReducer);
  const otpScreenBool = useSelector(state => state.ScreenReducer.userData);
  // const { AuthReducer } = reducerData;
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(true);

  // (useState < string) | (null > null);
  console.log('authReducer', AuthReducer);
  useEffect(() => {
    if (AuthReducer.userData?.userId) {
      setUserData(AuthReducer.userData);
    } else {
      setUserData(null);
    }
  }, [AuthReducer]);
  console.log(userData);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      console.log('set Loading time is working');
    }, 2000);
  }, []);

  useEffect(() => {
    console.log('otpScreenBool:', otpScreenBool);
  }, [otpScreenBool]);

  console.log('otpScreenBool2:', otpScreenBool);

  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('user').then(res => {
        return res;
      });
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    (async () => {
      let value = getData().then(res => {
        // console.log('this is res in APp');
        console.log(res);
        let v = JSON.parse(res);

        console.log('v:', v);

        if (v?.user.id) {
          dispatch(userDataFromAsyncStorage(v));
          //  SplashScreen.hide();
        } else {
          //  SplashScreen.hide();
        }
      });
    })().catch(err => {
      console.error(err);
    });
  }, []);

  React.useEffect(() => {
    if (AuthReducer.userData?.user?.id) {
      setUserData(AuthReducer.userData);
    } else {
      setUserData(null);
    }
  }, [AuthReducer.userData]);

  useEffect(() => {
    console.log('userData:', userData);
  }, [userData]);

  if (loader) return <SplashScreen />;

  // if (!userData?.userId) return <IsNotUser />;

  // return <IsUser />;

  function SplashScreen() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Group>
            <Stack.Screen name="splash" component={Splash} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  // function IsUser() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {userData == null ? (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="TermofServices" component={TermofServices} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="PasswordChange" component={PasswordChange} />
          </>
        ) : otpScreenBool ? (
          <>
            {/* <Stack.Screen name="ProfileCreate" component={ProfileCreateStart} /> */}
            <Stack.Screen name="ProfileCreate" component={ProfileCreateStart} />
          </>
        ) : (
          <>
            <Stack.Screen name="main" component={MainScreen} />
            <Stack.Screen name="profile" component={ProfileDetails} />
            <Stack.Screen name="gender" component={Gender} />
            <Stack.Screen name="changePass" component={ChangePassword} />
            <Stack.Screen name="edit" component={EditProfile} />
            <Stack.Screen name="successEmail" component={SuccessViaEmail} />
            <Stack.Screen name="friends" component={Friends} />
            <Stack.Screen name="help" component={Help} />
            <Stack.Screen name="notification" component={Notification} />
            <Stack.Screen name="spouse" component={SpouseInvite} />
            {/* <Stack.Screen name="expiredOtp" component={ExpiredViaOtp} />
          <Stack.Screen name="successOtp" component={SuccessViaOtp} /> */}
            <Stack.Screen name="verifyEmail" component={VerifyEmail} />
            <Stack.Screen name="viaEmail" component={ViaEmail} />
            {/* <Stack.Screen name="viaOtp" component={Viaotp} /> */}
            <Stack.Screen name="interest" component={Interest} />
            <Stack.Screen name="setting" component={Setting} />
            <Stack.Screen name="partnerInfo" component={PartnerInfo} />
            <Stack.Screen name="addAlbum" component={AddAlbum} />
            <Stack.Screen name="createAlbum" component={CreateAlbum} />
            <Stack.Screen name="viewAlbum" component={ViewAlbum} />
            <Stack.Screen name="Match" component={Match} />
            <Stack.Screen name="Mainprofile" component={Profile} />
            <Stack.Screen name="Profiledetails" component={ViewProfile} />
            <Stack.Screen name="families" component={Families} />
            <Stack.Screen name="Addevent" component={AddEvent} />
            <Stack.Screen name="Createevent" component={CreateEvent} />
            <Stack.Screen name="messages" component={Messages} />
            <Stack.Screen name="chat" component={Chat} />
            <Stack.Screen name="eventDetails" component={EventDetails} />
            <Stack.Screen name="phone" component={Phone} />
            {/* <Stack.Screen name="otp" component={Otp} /> */}
            <Stack.Screen name="GalleryMedia" component={GalleryMedia} />
            <Stack.Screen name="ViewImage" component={ViewImages} />
            <Stack.Screen name="map" component={Map} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//     <NavigationContainer independent={true}>
//       {/* <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="messages"> */}
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Group>
//           <Stack.Screen name="main" component={MainScreen} />
//           <Stack.Screen name="profile" component={ProfileDetails} />
//           <Stack.Screen name="gender" component={Gender} />
//           <Stack.Screen name="changePass" component={ChangePassword} />
//           <Stack.Screen name="edit" component={EditProfile} />
//           <Stack.Screen name="successEmail" component={SuccessViaEmail} />
//           <Stack.Screen name="friends" component={Friends} />
//           <Stack.Screen name="help" component={Help} />
//           <Stack.Screen name="notification" component={Notification} />
//           <Stack.Screen name="spouse" component={SpouseInvite} />
//           {/* <Stack.Screen name="expiredOtp" component={ExpiredViaOtp} />
//           <Stack.Screen name="successOtp" component={SuccessViaOtp} /> */}
//           <Stack.Screen name="verifyEmail" component={VerifyEmail} />
//           <Stack.Screen name="viaEmail" component={ViaEmail} />
//           {/* <Stack.Screen name="viaOtp" component={Viaotp} /> */}
//           <Stack.Screen name="interest" component={Interest} />
//           <Stack.Screen name="setting" component={Setting} />
//           <Stack.Screen name="partnerInfo" component={PartnerInfo} />
//           <Stack.Screen name="addAlbum" component={AddAlbum} />
//           <Stack.Screen name="createAlbum" component={CreateAlbum} />
//           <Stack.Screen name="viewAlbum" component={ViewAlbum} />
//           <Stack.Screen name="Match" component={Match} />
//           <Stack.Screen name="Mainprofile" component={Profile} />
//           <Stack.Screen name="Profiledetails" component={ViewProfile} />
//           <Stack.Screen name="families" component={Families} />
//           <Stack.Screen name="Addevent" component={AddEvent} />
//           <Stack.Screen name="Createevent" component={CreateEvent} />
//           <Stack.Screen name="messages" component={Messages} />
//           <Stack.Screen name="chat" component={Chat} />
//           <Stack.Screen name="eventDetails" component={EventDetails} />
//           <Stack.Screen name="phone" component={Phone} />
//           {/* <Stack.Screen name="otp" component={Otp} /> */}
//           <Stack.Screen name="GalleryMedia" component={GalleryMedia} />
//           <Stack.Screen name="ViewImage" component={ViewImages} />
//           <Stack.Screen name="map" component={Map} />
//         </Stack.Group>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// function IsNotUser() {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Group>
//           <Stack.Screen name="login" component={Login} />
//           <Stack.Screen name="SignUp" component={SignUp} />
//           <Stack.Screen name="TermofServices" component={TermofServices} />
//           <Stack.Screen name="OtpScreen" component={OtpScreen} />
//           <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//           <Stack.Screen name="PasswordChange" component={PasswordChange} />
//           <Stack.Screen name="ProfileCreate" component={ProfileCreateStart} />
//           <Stack.Screen name="DummyPage" component={DummyPage} />
//           <Stack.Screen name="onboarding" component={Onboarding} />
//           <Stack.Screen name="email" component={Email} />
//           <Stack.Screen name="profile" component={ProfileDetails} />
//           <Stack.Screen name="gender" component={Gender} />
//           <Stack.Screen name="notification" component={Notification} />
//           <Stack.Screen name="spouse" component={SpouseInvite} />
//           {/* <Stack.Screen name="expiredOtp" component={ExpiredViaOtp} /> */}
//           {/* <Stack.Screen name="successOtp" component={SuccessViaOtp} /> */}
//           <Stack.Screen name="verifyEmail" component={VerifyEmail} />
//           <Stack.Screen name="viaEmail" component={ViaEmail} />
//           {/* <Stack.Screen name="viaOtp" component={Viaotp} /> */}
//           <Stack.Screen name="interest" component={Interest} />
//           <Stack.Screen name="successEmail" component={SuccessViaEmail} />
//           <Stack.Screen name="friends" component={Friends} />

//           {/* For Testing Some Stack here */}

//           <Stack.Screen name="main" component={MainScreen} />
//           <Stack.Screen name="changePass" component={ChangePassword} />
//           <Stack.Screen name="edit" component={EditProfile} />
//           <Stack.Screen name="help" component={Help} />
//           <Stack.Screen name="setting" component={Setting} />
//           <Stack.Screen name="partnerInfo" component={PartnerInfo} />
//           <Stack.Screen name="addAlbum" component={AddAlbum} />
//           <Stack.Screen name="createAlbum" component={CreateAlbum} />
//           <Stack.Screen name="viewAlbum" component={ViewAlbum} />
//           <Stack.Screen name="Match" component={Match} />
//           <Stack.Screen name="Mainprofile" component={Profile} />
//           <Stack.Screen name="Profiledetails" component={ViewProfile} />
//           <Stack.Screen name="families" component={Families} />
//           <Stack.Screen name="Addevent" component={AddEvent} />
//           <Stack.Screen name="Createevent" component={CreateEvent} />
//           <Stack.Screen name="messages" component={Messages} />
//           <Stack.Screen name="chat" component={Chat} />
//           <Stack.Screen name="eventDetails" component={EventDetails} />
//           <Stack.Screen name="phone" component={Phone} />
//           {/* <Stack.Screen name="otp" component={Otp} /> */}
//         </Stack.Group>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
