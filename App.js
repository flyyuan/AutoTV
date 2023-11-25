import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";
import * as ScreenOrientation from "expo-screen-orientation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreen: {
    flex: 1,
  },
});

export default function App() {
  const webviewRef = useRef(null);

  useEffect(() => {
    // 加载时的操作，比如设置 WebView

    return () => {
      // 组件卸载时的清理操作
      if (webviewRef.current) {
        webviewRef.current.stopLoading(); // 停止加载
        // 进行其他必要的清理
      }
    };
  }, []);

  handleLoad = () => {
    const INJECTED_JAVASCRIPT = `(function() {
      const videoPlayerDiv = document.querySelector('.video-player');
      if (videoPlayerDiv) {
        videoPlayerDiv.style.width = '100%';
        videoPlayerDiv.style.height = '100%';
        videoPlayerDiv.style.position = 'absolute';
        videoPlayerDiv.style.top = '0';
        videoPlayerDiv.style.left = '0';
        videoPlayerDiv.style.zIndex = '9999';
      }
    })();`;

    if (webviewRef.current) {
      webviewRef.current.injectJavaScript(INJECTED_JAVASCRIPT);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        style={styles.fullScreen}
        source={{ uri: "https://m.gdtv.cn/tvChannelDetail/100" }}
        mediaPlaybackRequiresUserAction={false}
        ref={webviewRef}
        onLoad={this.handleLoad}
        allowsFullscreenVideo
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}
