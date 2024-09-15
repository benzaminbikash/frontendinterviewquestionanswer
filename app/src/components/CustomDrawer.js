import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";

const CustomDrawer = () => {
  return (
    <SafeAreaView clasName="flex-1">
      <View className="w-full h-[200px] bg-[#6441A5] shadow-lg shadow-red-400 flex justify-center items-center">
        <View style={{ position: "relative" }}>
          <Image
            style={{ width: 90, height: 90 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/552/552721.png",
            }}
          />
          <TouchableOpacity>
            <AntDesign
              name="pluscircle"
              size={26}
              color="white"
              style={{ position: "absolute", right: 0, bottom: 0 }}
            />
          </TouchableOpacity>
        </View>
        <Text className="font-bold text-white mt-2 text-lg ">
          Bikash Nepali
        </Text>
        <Text className="font-bold text-white  text-lg ">
          benzaminbikash@gmail.com
        </Text>

        <Text className="font-bold text-white  text-lg ">Your Score is: 0</Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

// <TouchableOpacity className="flex-row items-center p-2 gap-2  border-red-600 border-2">
//         <Entypo name="home" size={24} color="black" />
//         <Text className="font-bold">Home</Text>
//       </TouchableOpacity>
