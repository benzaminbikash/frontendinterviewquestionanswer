import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Lineargradient from "../components/lineargradient";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useLoginMutation } from "../redux/API/userApi";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/API/token";
import AsyncStorage from "@react-native-async-storage/async-storage";
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
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
