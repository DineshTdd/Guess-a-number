import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
<<<<<<< HEAD
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
=======
>>>>>>> 92d87454bdcfd92a403f3124fdf54214e68c7cd3

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

<<<<<<< HEAD
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
=======
export default function App() {
  const [userNumber, setUserNumber] =useState();
  const [guessRounds , setGuessRounds] = useState(0);
>>>>>>> 92d87454bdcfd92a403f3124fdf54214e68c7cd3

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

<<<<<<< HEAD
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
=======
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
>>>>>>> 92d87454bdcfd92a403f3124fdf54214e68c7cd3
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
<<<<<<< HEAD
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
=======
  }


  let content = <StartGameScreen onStartGame = {startGameHandler} />;

  if(userNumber && guessRounds <=0 ) {
    content = <GameScreen userChoice = {userNumber} onGameOver = {gameOverHandler}/>;
  }
  else if (guessRounds>0){
    content =<GameOverScreen onRestart={configureNewGameHandler} roundsNumber={guessRounds} userNumber ={userNumber} />;
>>>>>>> 92d87454bdcfd92a403f3124fdf54214e68c7cd3
  }

  return (
    <View style={styles.screen}>
<<<<<<< HEAD
      <Header title="Guess a Number" />
      {content}
=======
     <Header title="Guess a number" />
     {content}
>>>>>>> 92d87454bdcfd92a403f3124fdf54214e68c7cd3
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
