import {
  ActivityIndicator,
  Image,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import dynamicLinks from '@react-native-firebase/dynamic-links';

const PostDetail = ({route}) => {
  const {productId} = route.params;
  const [postData, setPostData] = useState({});
  // console.log('productId', productId);
  const [loading, setLoading] = useState(true);

  const getSingleProduct = async () => {
    try {
      const result = await axios.get(
        `https://dummyjson.com/products/${productId}`,
      );
      const data = result.data;
      setPostData(data);
      setLoading(false);
      // console.log('data', data);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log('data from state:', postData);
  useEffect(() => {
    getSingleProduct();
  }, []);

  // const generateLink = async () => {
  //     try {
  //         const link = await dynamicLinks().buildShortLink({
  //             link: `https://mrdeeplinkingpractice.page.link/Zi7X?productId=${productId}`,
  //             domainUriPrefix: 'https://mrdeeplinkingpractice.page.link',
  //             android: {
  //                 packageName: 'com.deeplinkpractice',
  //             }
  //         }, dynamicLinks.ShortLinkType.DEFAULT)
  //         console.log('link:', link)
  //         return link
  //     } catch (error) {
  //         console.log('Generating Link Error:', error)
  //     }
  // }

  // const shareUserProfile = async () => {
  //     const getLink = await generateLink()
  //     try {
  //         Share.share({
  //             message: getLink,
  //           });
  //     } catch (error) {
  //         console.log('Sharing Error:', error)
  //     }
  // }

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.flatStyle}>
            <Image
              style={styles.imgStyle}
              source={{uri: postData?.thumbnail}}
            />
            <View style={styles.bodyStyle}>
              <View style={styles.innerBox}>
                <Text style={styles.textTitle}>{postData?.brand}</Text>
                <Text style={styles.textStyle}>{postData?.price}$</Text>
              </View>
              <Text>{postData?.description}</Text>
            </View>
            <View style={styles.footer}>
              <Pressable
                // onPress={shareUserProfile}
                style={styles.btn}>
                <Text style={styles.btnTitle}>Share Product</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgStyle: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  bodyStyle: {
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  innerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  btn: {
    backgroundColor: '#797ee630',
    padding: 20,
    borderRadius: 10,
  },
  btnTitle: {
    color: '#797ee6',
    fontSize: 20,
    textAlign: 'center',
  },
});
