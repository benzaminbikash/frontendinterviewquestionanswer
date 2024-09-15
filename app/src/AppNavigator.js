import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import AuthScreen from "./screens/AuthScreen";
import LoginScreen from "./screens/LoginScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import QuizScreen from "./screens/QuizScreen";
import QuestionScreen from "./screens/QuestionScreen";
import AnswerScreen from "./screens/AnswerScreen";
import { StatusBar } from "react-native";
import CustomDrawer from "./components/CustomDrawer";

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
      </Stack.Navigator>
      <StatusBar backgroundColor="#6441A5" />
    </NavigationContainer>
  );
};

export default AppNavigator;
