import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenHome } from '../screens/ScreenHome';
import { ScreenMyTest } from '../screens/ScreenMyTest';
import { ScreenSetting } from '../screens/ScreenSetting';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Material = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator({ route }) {

    console.log(`status ${route?.params?.status}`);

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="ScreenHome" component={ScreenHome} />
            <Drawer.Screen name="ScreenMyTest" component={ScreenMyTest} />
        </Drawer.Navigator>
    );
}

function MaterialNavigator() {
    return (
        <Material.Navigator>
            <Material.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Material.Screen name="ScreenHome" component={ScreenHome} options={{
                title: 'Заголовок Home'
            }} />
            <Material.Screen name="ScreenSetting" component={ScreenSetting} options={{
                title: 'Заголовок Setting'
            }} />
        </Material.Navigator>
    );
}

export default function Navigate() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{
                    title: false,
                    headerShown: false
                }} />
                <Stack.Screen name="MaterialNavigator" component={MaterialNavigator} options={{
                    title: false,
                    headerShown: false
                }} />
                <Stack.Screen name="ScreenSetting" component={ScreenSetting} options={{
                    title: 'Заголовок Setting'
                }} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}