import { FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Question from "../components/question";

const QuestionScreen = () => {
  const data = [
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive????",
    "what is the poper of react antive???? what is the poper of react antive????",
  ];

  return (
    <SafeAreaView className="w-full">
      <FlatList
        pagingEnabled={false}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => {
          return <Question item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default QuestionScreen;
