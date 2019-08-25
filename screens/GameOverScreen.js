import React from 'react';
import { View,Button, Text, StyleSheet} from 'react-native';

const GameOverScreen = props => {
    console.log('Gameover');
    return( 
    <View style = {styles.screen}>
        <Text>The Game is Over!</Text>
        <Text>Number of rounds: {props.roundsNumber}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <Button title="New Game" onPress={props.onRestart}></Button>
    </View>
);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default GameOverScreen;