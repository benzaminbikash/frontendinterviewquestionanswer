import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Lineargradient from "../components/lineargradient";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
import { useNavigation } from "@react-navigation/native";

const AuthScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback>
      <Lineargradient>
        <View className="p-2">
          <ScrollView
            showsVerticalScrollIndicator={false}
            pagingEnabled={false}
          >
            <Text className="text-white font-bold text-4xl  my-5">Sign Up</Text>
            <CustomInput label="Name:" />
            <CustomInput label="Email:" type="email-address" />
            <CustomInput label="Phone Number:" type="phone-pad" />
            <CustomInput label="Password:" secureTextEntry={true} />
            <CustomInput
              label="Confirmation Password:"
              secureTextEntry={true}
            />
            <CustomButton title="Sign Up" />
            <View className="flex-row gap-1 justify-center mt-2  items-center">
              <Text className="text-white text-sm">
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("login");
                }}
              >
                <Text className=" text-blue-500 text-[18px]">Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Lineargradient>
    </TouchableWithoutFeedback>
  );
};

export default AuthScreen;
