import {
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Lineargradient from "../components/lineargradient";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
import { useNavigation } from "@react-navigation/native";
import { useSendOtpMutation } from "../redux/API/userApi";

const ForgetScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [sendOtp, { isLoading }] = useSendOtpMutation();
  const handleForm = async () => {
    if (!email) {
      Alert.alert("Email is required.");
    } else {
      const response = await sendOtp({ email });
      if (response.error) {
        Alert.alert("Error", response.error.data.message);
      } else {
        navigation.navigate("otp", { item: email });
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
            <Text className="text-white font-bold text-4xl  -mt-1 mb-5">
              Forget{"\n"}Password?
            </Text>
            <CustomInput
              label="Enter Your Email"
              type="email-address"
              onChange={setEmail}
            />
            <CustomButton
              title={
                isLoading ? (
                  <ActivityIndicator color={"white"} size={25} />
                ) : (
                  "Submit"
                )
              }
              Pressed={() => handleForm()}
            />
            <StatusBar backgroundColor="#6441A5" />
          </ScrollView>
        </View>
      </Lineargradient>
    </TouchableWithoutFeedback>
  );
};

export default ForgetScreen;
