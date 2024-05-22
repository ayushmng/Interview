import {StackNavigationProp} from '@react-navigation/stack';
import {AntDesignIcon} from '../Themes/Icons';
import React, {useState, useEffect, FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../Themes/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Home {
  navigation: StackNavigationProp<any>;
  route?: any;
}

const homeIcon = AntDesignIcon({
  name: 'home',
  color: Colors.infoMessage,
  size: wp(4),
});

export const Home: FC<Home> = ({navigation}: Home) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center', alignSelf: 'center'}}></View>
      <Text style={{alignSelf: 'center', color: 'black'}}>
        Welcome to Home Page!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
