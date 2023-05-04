import * as React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import MainRouter from './src/screens';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/redux/store'
import { changeScreenName } from './src/redux/actions';

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = React.useRef();
  const dispatch = useDispatch();
  const screenName = useSelector(state => state.currentScreenName)
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          dispatch(changeScreenName(currentRouteName))
        }

        routeNameRef.current = currentRouteName;
      }}
    >
      <MainRouter />
    </NavigationContainer>
  );
}

export default Main