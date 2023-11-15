import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { TextBox } from '../components/UI/TextBox';
import { Button } from '../components/UI/Button';


export const ScreenHome = ({ navigation, route }) => {

    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            <Button navigation={navigation} status={'status text'}>DrawerNavigator</Button>
            <Button navigation={navigation} >MaterialNavigator</Button>
            <TextBox>ScreenHome</TextBox>
        </View>

    );

};