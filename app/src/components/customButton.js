import { Text, TouchableOpacity } from "react-native";
import React from "react";

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
