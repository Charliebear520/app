import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from './src/navigation';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
// import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <SafeAreaProvider >
      <SafeAreaView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <Navigation />        
          {/* <AlbumList /> */}
        </NativeBaseProvider>      
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

export default App;