import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import LoadingUi from "../components/loadingUi";
import { useGetCategoryQuery } from "../redux/API/categoryApi";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { data: categories, isLoading } = useGetCategoryQuery();
  if (isLoading) {
    return <LoadingUi />;
  }
  return (
    <View className="px-2 flex-1 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full h-full flex-row flex-wrap pt-2 justify-between gap-1 ">
          {categories?.data.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("question", { item: item })}
                className="w-[48%] h-52 mb-1 rounded-lg shadow-xl bg-white "
                key={index}
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-44 object-contain rounded-full shadow-xl shadow-red-500 "
                />
                <Text className="font-bold text-[18px]  text-center mt-1 ">
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <StatusBar backgroundColor="#6441A5" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
