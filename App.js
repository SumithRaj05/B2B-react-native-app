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

// import * as React from "react";
// import { View, Platform } from "react-native";
// import { WebView } from "react-native-webview";

// export default class App extends React.Component {
//   render() {
//     return Platform.OS === "web" ? (
//       <iframe src="https://www.somedomain.com/" height={'100%'} width={'100%'} />
//     ) : (
//       <View style={{ flex: 1 }}>
//         <WebView
//           source={{ uri: "https://www.somedomain.com/" }}
//           style={{marginTop: 22, flex: 1}}
//         />
//       </View>
//     )
//   }
// }