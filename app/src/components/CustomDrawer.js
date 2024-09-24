import React, { useCallback, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { View, Text, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { removeToken } from "../redux/API/token";
import { useMyDataQuery } from "../redux/API/userApi";

const CustomDrawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth?.token);

  const { data: user } = useMyDataQuery(auth, {
    skip: !auth,
  });

  const logoutUser = useCallback(async () => {
    navigation.dispatch(StackActions.replace("login"));
    dispatch(removeToken());
    await AsyncStorage.removeItem("AUTH");
  }, [dispatch, navigation]);

  const totalScore = user?.data?.score?.totalScore || 0;
  const [select, setSelect] = useState(1);
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
          {user?.data?.name}
        </Text>
        <Text className="font-bold text-white  text-lg ">
          {user?.data?.email}
        </Text>

        <Text className="font-bold text-white  text-lg ">
          Your Score is: {totalScore}
        </Text>
      </View>
      <View className="m-1">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("tab");
            setSelect(1);
          }}
          className={`border-2 p-3 rounded-md ${
            select == 1 ? "bg-[#6441A5] " : "bg-[#060111] "
          } flex flex-row items-center border-[#6441A5]`}
        >
          <Entypo name="home" size={22} color="white" />
          <Text className="pl-3 text-white text-base font-bold">Home</Text>
        </TouchableOpacity>
      </View>
      <View className="m-1">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("practice");
            setSelect(2);
          }}
          className={`border-2 p-3 rounded-md ${
            select == 2 ? "bg-[#6441A5] " : "bg-[#060111] "
          } flex flex-row items-center border-[#6441A5]`}
        >
          <FontAwesome5 name="book-reader" size={22} color="white" />
          <Text className="pl-3 text-white text-base font-bold">Practice</Text>
        </TouchableOpacity>
      </View>
      <View className="m-1">
        <TouchableOpacity
          onPress={logoutUser}
          className="border-2 p-3 rounded-md flex flex-row items-center border-[#6441A5] bg-[#060111] "
        >
          <MaterialCommunityIcons name="logout" size={22} color="white" />
          <Text className="pl-3 text-white text-base font-bold">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
