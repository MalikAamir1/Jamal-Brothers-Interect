import {StyleSheet} from 'react-native';
import FONT from 'src/Assets/Style/Font';

export const styles = StyleSheet.create({
  ContainerfirstBackIcon: {
    flexDirection: 'row',
    marginTop: '10%',
    marginLeft: '11%',
  },
  ContainerMyEmailText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000000',
    marginHorizontal: '11%',
    marginTop: '5%',
  },
  ContainerMyEmailDescription: {
    marginHorizontal: '11%',
    marginTop: '3%',
    fontSize: 14,
    fontWeight: '400',
  },
  input: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 13,
    borderRadius: 15,
    textAlign: 'center',
    borderColor: '#E8E6EA',
    backgroundColor: '#F5F5F5',
  },
  containerText: {
    // alignItems: "flex-end",
    padding: 10,
    fontFamily: FONT.pop,
  },
  containerInputs: {
    // marginTop: 25,
    // marginLeft: 32,
    // marginRight: 32
    // marginLeft:'13%',
    // marginRight:'9%',
    // alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  signUpButton: {
    // marginLeft: '13%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10%',
    // marginTop:'15%',
    // marginRight:'9%'
  },
});
