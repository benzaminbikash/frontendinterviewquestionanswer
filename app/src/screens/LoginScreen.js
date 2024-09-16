import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from "@react-navigation/native";

import { addToken } from "../redux/API/token";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
import { useLoginMutation } from "../redux/API/userApi";
import Lineargradient from "../components/lineargradient";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleForm = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required!");
    } else {
      const data = {
        email,
        password,
      };
      const response = await login(data);
      if (response.error) {
        Alert.alert("Error", response.error.data.message);
      } else {
        Alert.alert(response.data.message);
        await AsyncStorage.setItem("AUTH", response.data.token);
        dispatch(addToken(response.data.token));
        navigation.dispatch(StackActions.replace("main"));
      }
    }
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
              onChange={setEmail}
            />
            <CustomInput
              label="Password:"
              secureTextEntry={true}
              onChange={setPassword}
            />
            <CustomButton
              title={
                isLoading ? (
                  <ActivityIndicator color={"white"} size={25} />
                ) : (
                  "Login"
                )
              }
              Pressed={() => handleForm()}
            />
            <View className="flex-row gap-1 justify-center mt-2 ">
              <Text className="text-white text-sm">Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("auth")}>
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
