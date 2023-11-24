import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreen: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        style={styles.fullScreen}
        source={{ uri: "https://www.gdtv.cn/tvChannelDetail/44" }}
      />
    </View>
  );
}
