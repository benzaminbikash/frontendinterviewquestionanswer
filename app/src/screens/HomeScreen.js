import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    name: "JavaScript",
    image:
      "https://i.pinimg.com/564x/0e/4b/d6/0e4bd6550df924cbe1374d35def92c56.jpg",
  },
  {
    id: 2,
    name: "JavaScript",
    image:
      "https://i.pinimg.com/564x/0e/4b/d6/0e4bd6550df924cbe1374d35def92c56.jpg",
  },
  {
    id: 3,
    name: "JavaScript",
    image:
      "https://i.pinimg.com/564x/0e/4b/d6/0e4bd6550df924cbe1374d35def92c56.jpg",
  },
  {
    id: 4,
    name: "JavaScript",
    image:
      "https://i.pinimg.com/564x/0e/4b/d6/0e4bd6550df924cbe1374d35def92c56.jpg",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="px-2 flex-1 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full h-full flex-row flex-wrap pt-2 justify-between gap-1 ">
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("question")}
                className="w-[48%] h-48 mb-1 rounded-lg "
                key={index}
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-44 object-contain rounded-lg "
                />
                <Text className="font-bold text-[18px] ">{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
