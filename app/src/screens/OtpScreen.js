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
import { useNavigation, useRoute } from "@react-navigation/native";
import OTPTextInput from "react-native-otp-textinput";
import { usePasswordRecoveryMutation } from "../redux/API/userApi";

const OtpScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [data, setData] = useState(0);
  const [passwordRecovery, { isLoading }] = usePasswordRecoveryMutation();

  const submitOTP = async () => {
    if (data.length >= 4) {
      console.log(data);
      const response = await passwordRecovery({ otp: data });
      if (response.error) {
        Alert.alert("Error", response.error.data.message);
      } else {
        navigation.navigate("passwordchange", { item: params.item });
      }
    } else {
      Alert.alert("OTP must be 4-digits code.");
    }
  };

  return (
    <TouchableWithoutFeedback>
      <Lineargradient>
        <View className=" px-2">
          <Text className="text-white font-bold text-2xl mb-2">
            Please Enter 4-digit code
          </Text>
          <Text className="mb-2 text-gray-400 text-xl">
            We sent you 4-digit code to you at {params.item}
          </Text>

          <Text className="mt-5  text-gray-400 text-base ">Enter OTP</Text>
          <View className="mb-3 mt-1">
            <OTPTextInput
              handleTextChange={(e) => setData(e)}
              textInputStyle={{
                backgroundColor: "white",
                borderBottomWidth: 0,
                borderRadius: 50,
                color: "green",
              }}
              autoFocus={true}
              tintColor={"green"}
              offTintColor={"red"}
            />
          </View>
          <CustomButton
            title={
              isLoading ? (
                <ActivityIndicator color={"white"} size={25} />
              ) : (
                "Submit"
              )
            }
            Pressed={() => submitOTP()}
          />
        </View>
        <StatusBar backgroundColor="#6441A5" />
      </Lineargradient>
    </TouchableWithoutFeedback>
  );
};

export default OtpScreen;
