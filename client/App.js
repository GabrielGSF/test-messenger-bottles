/*
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DetailsScreen from './src/components/About/AboutComponent';
import MainComponent from './src/components/MainScreen/MainComponent';
import ChatScreen from './src/components/ChatScreen/ChatComponent';
import LoginScreen from './src/components/LoginScreen/LoginComponent';

//const Stack = createStackNavigator();

//<AppStack.Screen name='main' component={MainComponent}/>

/*function MainStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="main" component={MainComponent} />
      <Stack.Screen name="details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}*/
/*
const MainStack = createStackNavigator({
  MainComponent: MainComponent,
  Details: DetailsScreen,
});
*/
/*function ChatStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="chat" component={ChatScreen} />
    </Stack.Navigator>
  )
}*/
/*
const ChatStack = createStackNavigator({
  Login: LoginScreen,
  Chat: ChatScreen
});
*/
//const Tab = createBottomTabNavigator();

/*function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="mainscreen" component={MainStack} />
      <Tab.Screen name="chat" component={ChatStack} />
    </Tab.Navigator>
  );
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'MainScreen') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Chat') {
          iconName = `ios-chatboxes${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#f4511e',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
}*/
/*
export default createBottomTabNavigator(
  {
    MainScreen: MainStack(),
    Chat: ChatStack(),
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'MainScreen') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Chat') {
          iconName = `ios-chatboxes${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#f4511e',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
*/
import { StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
import Routes from "./routes";
import Header from "./src/components/Header";
import ConfigUser from "./src/pages/ConfigUser";
import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";
import Welcome from "./src/pages/Welcome";

import HomeScreen from "./src/components/MainScreen/MainComponent"
import DetailsScreen from "./src/components/About/AboutComponent"//Não funciona
import ChatScreen from "./src/components/ChatScreen/ChatComponent";

export default function App() {
	return (
		<Provider>
			<Routes />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});