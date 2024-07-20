import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title }) => {
  return (
    <TouchableOpacity className="bg-purple-500 h-[50px] rounded-md flex justify-center items-center">
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
