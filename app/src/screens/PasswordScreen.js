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
import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { usePasswordChangeMutation } from "../redux/API/userApi";

const PasswordScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [passwordChange] = usePasswordChangeMutation();
  const handleForm = async () => {
    if (!password || !cpassword) {
      Alert.alert("Error", "Password and confirmation password are required.");
    } else {
      if (password != cpassword) {
        Alert.alert("Error", "Password and confirmation are not match.");
      } else {
        const response = await passwordChange({
          email: params.item,
          password: password,
        });
        if (response.error) {
          Alert.alert("Error", response.error.data.message);
        } else {
          Alert.alert(response.data.message);
          navigation.dispatch(StackActions.replace("login"));
        }
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
            <Text className="text-white font-bold text-2xl  -mt-1 mb-5">
              Create new password for {params.item}
            </Text>
            <CustomInput
              label="Password"
              type="text"
              onChange={setPassword}
              secureTextEntry={true}
            />
            <CustomInput
              label="Confirmation Password"
              type="text"
              onChange={setCPassword}
              secureTextEntry={true}
            />
            <CustomButton
              title={
                // isLoading ? (
                //   <ActivityIndicator color={"white"} size={25} />
                // ) : (
                "Submit"
                // )
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

export default PasswordScreen;
