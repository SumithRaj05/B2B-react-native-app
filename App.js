import React from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet, Platform } from 'react-native';

export default function App() {
  return (Platform.OS === "web" ? (
    <iframe src="https://bejiness.com" height={'100%'} width={'100%'} />
  ) : (
    <WebView
      style={styles.container}
      source={{ uri: 'https://bejiness.com' }}
    />
  )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});