import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Lineargradient from "../components/lineargradient";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <Lineargradient>
        <View className="p-2">
          <ScrollView
            showsVerticalScrollIndicator={false}
            pagingEnabled={false}
          >
            <Text className="text-white font-bold text-4xl  my-5">Sign In</Text>
            <CustomInput label="Email:" type="email-address" />
            <CustomInput label="Password:" secureTextEntry={true} />
            <CustomButton title="Login" />
            <View className="flex-row gap-1 justify-center mt-2 ">
              <Text className="text-white text-sm">Don't have an account?</Text>
              <TouchableOpacity>
                <Text className=" text-blue-500 text-sm">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Lineargradient>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
