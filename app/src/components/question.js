import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

const Question = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("answer", { item: item })}
      activeOpacity={0.7}
      className=" m-2 bg-[#6441A5] pl-2 pr-6  py-3  flex-row  rounded-md"
    >
      <Text className="text-white font-bold text-lg">{index + 1}. </Text>
      <Text className="text-white font-bold text-lg">{item?.question}</Text>
    </TouchableOpacity>
  );
};

export default Question;
