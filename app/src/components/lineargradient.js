import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const Lineargradient = ({ children, check }) => {
  return (
    <LinearGradient colors={["#6441A5", "#2a0845"]} className="flex-1">
      {check ? (
        <>{children}</>
      ) : (
        <SafeAreaView className="flex-1">{children}</SafeAreaView>
      )}
    </LinearGradient>
  );
};

export default Lineargradient;
