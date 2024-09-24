import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { practicequestions } from "../constants/constants";

const PracticeQuestion = () => {
  return (
    <View className="mx-2 pt-2">
      <FlatList
        data={practicequestions}
        renderItem={({ item, index }) => (
          <View key={index} className="px-2 rounded-sm py-5 bg-[#6441A5] mb-2 ">
            <Text className="text-white text-base font-bold">
              {index + 1}. {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default PracticeQuestion;
