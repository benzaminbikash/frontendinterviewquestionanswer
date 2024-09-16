import { useSelector } from "react-redux";
import React, { useCallback } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { COLORS } from "../constants/colors";
import LoadingUi from "../components/loadingUi";
import { useMyDataQuery } from "../redux/API/userApi";
import { useGetQuizedQuery } from "../redux/API/quizApi";

const QuizScreen = () => {
  const navigation = useNavigation();
  const { token } = useSelector((state) => state.auth);
  const { data: User, refetch: userRefresh } = useMyDataQuery(token);
  const {
    data: AllQuized,
    isLoading,
    refetch: quizRefresh,
  } = useGetQuizedQuery();
  let level = [];

  useFocusEffect(
    useCallback(() => {
      userRefresh();
      quizRefresh();
    }, [])
  );

  AllQuized?.data.map((item) => {
    if (!level.includes(item.level)) {
      level.push(item.level);
    }
  });
  const userScore = User?.data?.score?.totalScore || 0;
  const isLevelDisable = (level) => {
    const requiredScoreForLevel = 70 * (level - 1);
    return requiredScoreForLevel > userScore;
  };
  if (isLoading) return <LoadingUi />;
  return (
    <FlatList
      data={level}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        const isDisabled = isLevelDisable(item);
        return (
          <TouchableOpacity
            onPress={() => {
              if (!isDisabled) {
                navigation.navigate("level", { item: item });
              }
            }}
            className={`bg-[${COLORS.main}] m-2  h-[50px] flex justify-center items-center rounded-md`}
            disabled={isDisabled}
          >
            <Text className="font-bold text-base text-white">
              LEVEL {item}
              {"   "}
              {isDisabled && (
                <Fontisto
                  name="locked"
                  size={17}
                  color="white"
                  className="ml-2"
                />
              )}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListFooterComponent={() => (
        <View>
          <Text className="text-center font-bold uppercase">
            More Coming Soon
          </Text>
        </View>
      )}
    />
  );
};

export default QuizScreen;
