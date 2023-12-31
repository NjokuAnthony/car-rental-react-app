import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/Home';
import {AppLoading} from 'expo';
import Navigator from './routes/homestack';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

export default function App() {
const [fontsLoaded, setFontsLoaded] = useState = (false);

if(fontsLoaded){
  return (
    <Navigator />
   );
} else {
  return (
    <AppLoading
      startAssync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />
  )
}

  
}

