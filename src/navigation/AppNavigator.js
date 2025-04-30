import React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth } from '../services/firebase';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AdminDashboardScreen from '../screens/AdminDashboardScreen';
import AddCategoryScreen from '../screens/AddCategoryScreen';
import AddProductScreen from '../screens/AddProductScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ShopStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
);

const AdminStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
        <Stack.Screen name="AddCategory" component={AddCategoryScreen} />
        <Stack.Screen name="AddProduct" component={AddProductScreen} />
    </Stack.Navigator>
);

const AppNavigator = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(setUser);
        return subscriber;
    }, []);

    return (
        <NavigationContainer>
            {!user ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            ) : (
                <Drawer.Navigator initialRouteName="Shop">
                    <Drawer.Screen name="Shop" component={ShopStack} />
                    <Drawer.Screen name="Admin" component={AdminStack} />
                    <Drawer.Screen
                        name="Logout"
                        component={() => null}
                        listeners={{
                            drawerItemPress: () => auth.signOut(),
                        }}
                    />
                </Drawer.Navigator>
            )}
        </NavigationContainer>
    );
};

export default AppNavigator;