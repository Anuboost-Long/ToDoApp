import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import COLORS from './Constants/colors';
import Rootnavigation from './Navigation/Rootnavigation';
import store from './Redux/globalStore';
import {
  notificationListener,
  requestUserPermission,
} from './Utils/NotificationHelper';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
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
