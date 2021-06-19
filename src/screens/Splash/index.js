import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView
} from 'react-native';
import {images} from '../../assets'
export const Splash = () => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <Image
        source={images.logo}
        style={styles.iconStyle}
        resizeMode={'contain'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle:{width: 300, height: 150}
});
