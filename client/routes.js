import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./src/pages/Welcome";
import ConfigUser from "./src/pages/ConfigUser";
import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";
import { StatusBar } from "react-native";
import Contact from "./src/pages/Contacts";
//import loginRoute from "./src/utils"

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="welcome" component={Welcome} />
        <AppStack.Screen name="signin" component={SignIn} />
        <AppStack.Screen name="signup" component={SignUp} />
        <AppStack.Screen name="contacts" component={Contact} />
        <AppStack.Screen name="configuser" component={ConfigUser} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
