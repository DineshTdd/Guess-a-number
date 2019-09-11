import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';

import TitleText from './TitleText';
import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={ {...styles.headerBase, ...Platform.select({ios: styles.headerIos, android: styles.headerAndroid} ) } }>
      <TitleText style= {styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  headerIos: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  title: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
  }
});

export default Header;
