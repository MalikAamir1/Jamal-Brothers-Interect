import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import PostDetail from "../Screens/PostDetail";


const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PostDetail" component={PostDetail} />
            </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default Navigation
