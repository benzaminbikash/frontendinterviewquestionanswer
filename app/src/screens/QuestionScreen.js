import { FlatList, StatusBar, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Question from "../components/question";
import { useRoute } from "@react-navigation/native";
import { useGetQuestionAnswerQuery } from "../redux/API/quetionAnserapi";
import LoadingUi from "../components/loadingUi";
import { SCREEN } from "../constants/constants";
import LottieView from "lottie-react-native";

const QuestionScreen = () => {
  const router = useRoute();
  const { item } = router.params;
  const { data, isLoading } = useGetQuestionAnswerQuery(item._id);
  if (isLoading) {
    return <LoadingUi />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        pagingEnabled={false}
        showsVerticalScrollIndicator={false}
        data={data?.data}
        renderItem={({ item, index }) => {
          return <Question item={item} key={index} index={index} />;
        }}
        ListEmptyComponent={() => (
          <View className={`mt-10 items-center justify-center`}>
            <LottieView
              autoPlay
              source={require("../images/nodata.json")}
              style={{ width: 360, height: 360 }}
            />
            <Text className="font-bold text-xl text-gray-500">
              No question right now!
            </Text>
            <Text className="font-bold text-xl  text-gray-500">
              We will add as soon as possible.
            </Text>
          </View>
        )}
      />
      <StatusBar backgroundColor="white" />
    </SafeAreaView>
  );
};

export default QuestionScreen;
