import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
<<<<<<< HEAD
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default Input;
=======
    return (
        <TextInput {...props} style = {{...styles.input, ...props.style}}/>
    );
};

const styles=  StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
});

export default Input;
>>>>>>> 92d87454bdcfd92a403f3124fdf54214e68c7cd3
