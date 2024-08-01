import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AnswerScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-2">
        <Text className="text-3xl font-semibold  my-2">
          What is react native?
        </Text>

        <Text className="my-2 text-base text-justify font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          exercitationem sapiente dolore inventore vero aspernatur. Reiciendis,
          voluptatibus, in maxime molestias laboriosam exercitationem provident
          ipsum illum inventore dolorem atque, deserunt id voluptatibus quas
          consequatur laborum saepe tenetur
        </Text>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/cc/71/62/cc71626dd27d7fa1b555d3e410add14f.jpg",
          }}
          className="w-[100%] h-[100%] object-fill"
        />
      </View>
    </SafeAreaView>
  );
};

export default AnswerScreen;
