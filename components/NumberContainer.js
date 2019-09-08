import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
<<<<<<< HEAD

import Colors from '../constants/colors';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.accent,
    fontSize: 22
  }
});

export default NumberContainer;
=======
import Colors from '../constants/color';


const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>
                {props.children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number : {
        color: Colors.accent,
        fontSize: 22
    }
});

export default NumberContainer;
>>>>>>> 92d87454bdcfd92a403f3124fdf54214e68c7cd3
