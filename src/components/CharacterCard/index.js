import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'
export const CharacterCard = ({title, source , item}) => {
    const navigation=useNavigation()
  return (
    <TouchableOpacity style={{marginBottom:30}} onPress={()=>{ navigation.navigate("CharacterDetails", { id : item.id })}} >
      <ImageBackground source={{uri:source}} resizeMode="stretch" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.viewOne}>
            <Text style={styles.textStyle}>{title}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 150,
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'column-reverse',
  },
  viewOne: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F2323',
  },
  textStyle: {color: 'white', fontSize: 25, fontWeight: '600'},
});
