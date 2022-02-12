import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import NetInfo, {NetworkStatusProvider} from './src/network/networkUtil';
import AppNavigator from './src/route/AppNavigator';
const App = () => {
  const [isNetworkConnected, setConnectionStatus] = useState<boolean | null>(
    true,
  );
  const networkListenerFunction = () => {
    return NetInfo.addEventListener(state => {
      setConnectionStatus(state.isConnected);
    });
  };
  console.log(isNetworkConnected);
  useEffect(() => {
    const deregisterNetworkListener = networkListenerFunction();
    return () => deregisterNetworkListener();
  });
  return (
    <NavigationContainer>
      <NetworkStatusProvider value={isNetworkConnected}>
        <AppNavigator />
      </NetworkStatusProvider>
    </NavigationContainer>
  );
};
export default App;
