import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Header from "../components/Header";
import { COLORS } from "../constants/colors";
import LoadingUi from "../components/loadingUi";
import {
  useGetQuizLevelQuery,
  usePlayQuizMutation,
} from "../redux/API/quizApi";

const LevelWiseQuiz = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const auth = useSelector((state) => state.auth);
  const { data, isLoading } = useGetQuizLevelQuery(params.item);

  const [item, setItem] = useState(0);
  const filterData = data?.data[item];
  const [select, setSelect] = useState(null);
  const [totalScore, setTotalScore] = useState(0);

  const [playQuiz] = usePlayQuizMutation();

  const NextPage = () => {
    setSelect(async (prevSelect) => {
      if (item >= data?.data.length - 1) {
        const item = {
          token: auth?.token,
          data: {
            level: params.item,
            gamescore: totalScore,
          },
        };
        const data = await playQuiz(item);
        console.log(data);
        Alert.alert(
          "Thank you for completing the quiz!",
          `Your total score is ${totalScore}. ${data.data.message}`,

          [
            {
              text: "Okay",
              onPress: () => navigation.navigate("quiz"),
            },
          ]
        );
        return prevSelect;
      } else {
        if (filterData.correctAnswer === prevSelect + 1) {
          setTotalScore((pre) => pre + 10);
        }
        setItem((pre) => pre + 1);
        setSelect(null);
        return prevSelect;
      }
    });
  };

  if (isLoading) return <LoadingUi />;
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <Header level={params.item} navigation={navigation} />
      <View className="px-2">
        <Text className="text-xl font-bold my-1">
          {item + 1}. {filterData?.question}
        </Text>

        {filterData?.answers.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.6}
            key={index}
            onPress={() => {
              setSelect(index);
              NextPage();
            }}
            className={`py-3 border-2 my-1 rounded-md flex-row items-center px-2 border-[${COLORS.main}]`}
          >
            <View
              className={`w-[20px] h-[20px] rounded-full border-2 justify-center items-center border-[${COLORS.main}]`}
            >
              {select == index && (
                <View
                  className={`w-[12px] h-[12px] rounded-full bg-[${COLORS.main}]`}
                ></View>
              )}
            </View>
            <Text className="ml-2">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default LevelWiseQuiz;
