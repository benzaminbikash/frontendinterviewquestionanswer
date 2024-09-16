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
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
import Lineargradient from "../components/lineargradient";
import { useRegistrationMutation } from "../redux/API/userApi";

const AuthScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [registration, { isLoading }] = useRegistrationMutation();

  const Registration = async () => {
    if (!name || !email || !mobile || !password || !cpassword) {
      Alert.alert("Error", "All Fields Are Required!");
    } else if (password != cpassword) {
      Alert.alert("Error", "Password and confirmation password are not match!");
    } else {
      const data = {
        name,
        email,
        mobile,
        password,
      };
      const register = await registration(data);
      if (register.error && register.error.status == 400) {
        Alert.alert("Error", `${register.error.data.message}`);
      } else {
        Alert.alert(register.data.message);
        navigation.navigate("login");
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
            <Text className="text-white font-bold text-4xl  my-5">Sign Up</Text>
            <CustomInput label="Name:" onChange={setName} />
            <CustomInput
              label="Email:"
              type="email-address"
              onChange={setEmail}
            />
            <CustomInput
              label="Phone Number:"
              type="phone-pad"
              onChange={setMobile}
            />
            <CustomInput
              label="Password:"
              secureTextEntry={true}
              onChange={setPassword}
            />
            <CustomInput
              label="Confirmation Password:"
              secureTextEntry={true}
              onChange={setCPassword}
            />
            <CustomButton
              title={
                isLoading ? (
                  <ActivityIndicator color={"white"} size={25} />
                ) : (
                  "Sign Up"
                )
              }
              Pressed={() => Registration()}
            />
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
