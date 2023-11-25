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
  webview = null;

  handleLoad = () => {
    const INJECTED_JAVASCRIPT = `(function() {
      const videoPlayerDiv = document.querySelector('.video-player');
      if (videoPlayerDiv) {
        videoPlayerDiv.style.width = '100%';
        videoPlayerDiv.style.height = '100vh';
        videoPlayerDiv.style.position = 'absolute';
        videoPlayerDiv.style.top = '0';
        videoPlayerDiv.style.left = '0';
        videoPlayerDiv.style.zIndex = '9999';
      }
      var video = document.querySelector('video');
      video && video.addEventListener('play', function() {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        }
      });
    })();`;

    if (this.webview) {
      this.webview.injectJavaScript(INJECTED_JAVASCRIPT);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        style={styles.fullScreen}
        source={{ uri: "https://m.gdtv.cn/tvChannelDetail/44" }}
        mediaPlaybackRequiresUserAction={false}
        ref={(ref) => (this.webview = ref)}
        onLoad={this.handleLoad}
        allowsFullscreenVideo
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}
