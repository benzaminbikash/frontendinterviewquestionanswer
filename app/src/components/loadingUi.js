import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const LoadingUi = () => {
  return (
    <View className="w-[100%] items-center mt-2">
      <LottieView
        autoPlay
        style={{ width: "30%", height: "30%" }}
        source={require("../images/loading.json")}
      />
    </View>
  );
};

export default LoadingUi;
