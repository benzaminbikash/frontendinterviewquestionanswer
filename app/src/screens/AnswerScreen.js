import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import Octicons from "@expo/vector-icons/Octicons";
import { SCREEN } from "../constants/constants";

const AnswerScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text className="text-2xl font-bold  mt-2 ">{item?.question}</Text>

          {item?.answer?.map((item, index) => {
            return (
              <Text key={index} className="my-1  text-base text-justify ">
                {item}
              </Text>
            );
          })}
          {item?.points?.heading && (
            <Text className="mt-3">{item?.points?.heading}</Text>
          )}

          {item?.points?.point?.map((item, index) => {
            return (
              <View key={index} className="flex flex-row gap-2 mt-1 pr-2">
                <Octicons name="dot-fill" size={14} color="black" />
                <Text key={index} className="my-1 ">
                  {item}
                </Text>
              </View>
            );
          })}

          <Image source={{ uri: item?.image }} style={styles.image} />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="white" />
    </SafeAreaView>
  );
};

export default AnswerScreen;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    borderRadius: 16,
    width: "100%",
    height: undefined,
    aspectRatio: 100 / 100,
    alignSelf: "center",
  },
});
