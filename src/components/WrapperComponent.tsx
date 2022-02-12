import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NetworkStatusConsumer} from '../network/networkUtil';
const WrapperComponent = (ScreenComp: any) => {
  return (props: any) => {
    return (
      <NetworkStatusConsumer>
        {isNetworkConnected => (
          <View style={styles.container}>
            <ScreenComp {...props} isNetworkConnected={isNetworkConnected} />
          </View>
        )}
      </NetworkStatusConsumer>
    );
  };
};
export default WrapperComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
