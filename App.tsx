import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ProgressCircle from './src/components/ProgressCirlce';
const App = (props: any) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(progress + 1);
    }, 100);
    return () => clearInterval(progressTimer);
  });
  return (
    <View style={styles.container}>
      <ProgressCircle
        downloadProgress={progress}
        radius={20}
        fill={'lavender'}
      />
      <ProgressCircle downloadProgress={progress} radius={40} fill={'red'} />
      <ProgressCircle downloadProgress={progress} radius={80} fill={'green'} />
      <ProgressCircle
        downloadProgress={progress}
        radius={100}
        fill={'yellow'}
      />
      <ProgressCircle downloadProgress={progress} radius={200} fill={'blue'} />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
