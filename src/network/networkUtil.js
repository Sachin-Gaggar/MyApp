import React from 'react';
import NetInfo from '@react-native-community/netinfo';

const NetworkContext = React.createContext();

export const NetworkStatusConsumer = NetworkContext.Consumer;
export const NetworkStatusProvider = NetworkContext.Provider;

export default NetInfo;
