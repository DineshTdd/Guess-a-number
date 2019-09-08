import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
<<<<<<< HEAD
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
=======
    return (
        <View style={{...styles.card, ...props.style}} >{ props.children }</View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 8,
        padding: 20,
        borderRadius: 10,
    },
});

export default Card;
>>>>>>> 92d87454bdcfd92a403f3124fdf54214e68c7cd3
