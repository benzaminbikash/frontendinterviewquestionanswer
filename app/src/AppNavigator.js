import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import LoginScreen from "./screens/LoginScreen";
import SplashScreen from "./screens/SplashScreen";
import AnswerScreen from "./screens/AnswerScreen";
import LevelWiseQuiz from "./screens/LevelWiseQuiz";
import CustomDrawer from "./components/CustomDrawer";
import QuestionScreen from "./screens/QuestionScreen";
import ForgetScreen from "./screens/ForgetScreen";
import OtpScreen from "./screens/OtpScreen";
import PasswordScreen from "./screens/PasswordScreen";
import PracticeQuestion from "./screens/PracticeQuestion";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function Tablogic() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#6441A5",
          elevation: 6,
        },

        tabBarLabelStyle: {
          color: "white",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          height: 4,
          backgroundColor: "white",
          borderRadius: 100,
          elevation: 11,
          shadowColor: "red",
        },
      }}
    >
      <Tab.Screen name="category" component={HomeScreen} />
      <Tab.Screen name="quiz" component={QuizScreen} />
    </Tab.Navigator>
  );
}

function Main() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return <CustomDrawer {...props} />;
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6441A5",
          elevation: 0,
        },
      }}
    >
      <Drawer.Screen
        name="tab"
        component={Tablogic}
        options={{
          headerTitle: "INTERVIEW QUESTION ANSWER APP",
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="practice"
        component={PracticeQuestion}
        options={{
          headerTitle: "Practice Question",
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      />
    </Drawer.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="auth" component={AuthScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="question" component={QuestionScreen} />
        <Stack.Screen name="answer" component={AnswerScreen} />
        <Stack.Screen name="level" component={LevelWiseQuiz} />
        <Stack.Screen
          name="forget"
          component={ForgetScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6441A5",
            },
            headerTintColor: "white",
            title: "",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="otp"
          component={OtpScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6441A5",
            },
            headerTintColor: "white",
            title: "",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="passwordchange"
          component={PasswordScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6441A5",
            },
            headerTintColor: "white",
            title: "",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
