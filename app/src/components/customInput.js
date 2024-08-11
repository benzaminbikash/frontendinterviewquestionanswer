import React from "react";
import { View, Text, TextInput } from "react-native";

const CustomInput = ({
  type = "text",
  label,
  secureTextEntry = false,
  setData,
}) => {
  return (
    <View className="mb-5">
      <Text className="text-white mb-2 font-bold">{label} </Text>
      <TextInput
        onChangeText={(e) => setData(e)}
        keyboardType={type}
        secureTextEntry={secureTextEntry}
        style={{
          borderColor: "white",
          borderWidth: 1,
          height: 50,
          padding: 4,
          color: "white",
          borderRadius: 4,
          paddingHorizontal: 10,
        }}
        placeholderTextColor="white"
      />
    </View>
  );
};

export default CustomInput;
