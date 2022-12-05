import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import COLORS from './Constants/colors';
import Rootnavigation from './Navigation/Rootnavigation';
import store from './Redux/globalStore';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor={COLORS.primary} />
        <Rootnavigation />
      </Provider>
    </>
  );
};

export default App;
