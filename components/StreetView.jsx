// import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function StreetView(props) {
  const latitude = -8.05428;
  const longitude = -34.8813;

  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${latitude},${longitude}`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: streetViewUrl }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
