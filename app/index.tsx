import React, {useEffect} from 'react';
import {Keyboard, LogBox, StatusBar} from 'react-native';

import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Host} from 'react-native-portalize';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {navigationRef} from './navigation/RootNavigation';
import MainStack from './navigation/stacks/MainStack';

import {AppLoader} from '@/components';
import {linking, locale, toastConfig} from '@/config';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {persistor, settingsRedux, store} from '@/store';

const MainContainer = () => {
  const dispatch = useAppDispatch();

  const language = useAppSelector((state: any) => state.settings.language);
  const theme = useAppSelector(state => state.settings.theme);

  useEffect(() => {
    // LogBox.ignoreAllLogs(); //Ignore all log notifications
    Keyboard.addListener('keyboardDidShow', () => dispatch(settingsRedux.changeBottomTabDisplay(false)));
    Keyboard.addListener('keyboardDidHide', () => dispatch(settingsRedux.changeBottomTabDisplay(true)));
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  useEffect(() => {
    locale(language);
  }, [language]);

  return (
    <Host>
      <NavigationContainer ref={navigationRef} linking={linking} theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar barStyle="dark-content" />
        <MainStack />
      </NavigationContainer>
      <AppLoader />
    </Host>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainContainer />
      </PersistGate>
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default App;
