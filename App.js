import React, { useEffect, useRef } from "react";
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
      setTimeout(()=>{
        var videoPlayerDiv = document.querySelector("#video");
              if (videoPlayerDiv) {
                videoPlayerDiv.style.width = '100vw';
                videoPlayerDiv.style.height = '98vh';
                videoPlayerDiv.style.position = 'fixed';
                videoPlayerDiv.style.top = '0';
                videoPlayerDiv.style.left = '0';
                videoPlayerDiv.style.zIndex = '9999';
              }
      },10000)})();`;

    if (webviewRef.current) {
      webviewRef.current.injectJavaScript(INJECTED_JAVASCRIPT);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        style={styles.fullScreen}
        source={{
          uri: "https://www.gdtv.cn/tvChannelDetail/44",
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          },
        }}
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
