import { View, Text } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { useRoute } from "@react-navigation/native";

const YoutubeVideo = () => {
  const { params } = useRoute();
  const link = params.link;
  return (
    <WebView
      source={{
        uri: `${link}`,
      }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  );
};

export default YoutubeVideo;
