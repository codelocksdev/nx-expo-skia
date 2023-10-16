/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Canvas, Circle, Group } from '@shopify/react-native-skia';

export const App = () => {
  const size = 256;
  const r = size * 0.33;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Welcome to my reproducible example!</Text>
        <Canvas style={{ flex: 1 }}>
          <Group blendMode="multiply">
            <Circle cx={r} cy={r} r={r} color="cyan" />
            <Circle cx={size - r} cy={r} r={r} color="magenta" />
            <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
          </Group>
        </Canvas>
      </SafeAreaView>
    </>
  );
};

export default App;
