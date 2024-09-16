import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, Pressed }) => {
  return (
    <TouchableOpacity
      onPress={Pressed}
      className="bg-purple-500 h-[50px] rounded-md flex justify-center items-center"
    >
      <Text className="text-white font-bold text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
