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
import React, { useState } from "react";
import Lineargradient from "../components/lineargradient";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = async () => {
    const response = await fetch(
      "https://programminginterviewquestionandanswer.vercel.app/api/v4/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const result = await response.json();
    console.log(result);
  };
  return (
    <TouchableWithoutFeedback>
      <Lineargradient>
        <View className="p-2">
          <ScrollView
            showsVerticalScrollIndicator={false}
            pagingEnabled={false}
          >
            <Text className="text-white font-bold text-4xl  my-5">Sign In</Text>
            <CustomInput
              label="Email:"
              type="email-address"
              setData={setEmail}
            />
            <CustomInput
              label="Password:"
              secureTextEntry={true}
              setData={setPassword}
            />
            <CustomButton title="Login" Pressed={() => handleForm()} />
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
