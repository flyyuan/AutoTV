# AutoTV--点开就可以自动播放珠江台

> 我妈只看珠江台，为此之前专门开了电视家会员三年，电视家被封了，只好自己动手

使用 Webview 加载珠江台的官方URL，修改样式实现 video 组件设置为全屏并置顶

**如果你想换台，可以修改 URL 之后适配对应网站的样式，把 video 组件设置为全屏并置顶，再重新打包 APP**

<img src="./assets/iShot_2023-11-25_14.48.04.gif" />

## 安装

  1. [下载 apk](https://github.com/flyyuan/AutoTV/releases)
  2. 在电视上使用 adb 安装, adb 使用参考 [Install an app](https://developer.android.com/tools/adb#move)

## 使用

打开 APP 自动播放。不需要额外操作。

目前我家的使用方式是通过小米电视的语音控制，**打开xxx(现在 APP 名是珠江台，则是“打开珠江台”)** 就可以打开对应APP，不需要复杂操作从电视中打开某个 APP

TODO:
* [x] 等下次回家给电视安装 apk 就好～
* [x] 可行，视频内容可以撑满整个屏幕
