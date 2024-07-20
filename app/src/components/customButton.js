import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, Pressed }) => {
  return (
    <TouchableOpacity
      onPress={Pressed}
      className="bg-purple-500 h-[50px] rounded-md flex justify-center items-center"
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
