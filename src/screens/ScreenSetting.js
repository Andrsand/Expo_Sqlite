import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { TextBox } from '../components/UI/TextBox';
import { Button } from '../components/UI/Button';


export const ScreenSetting = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            <Button navigation={navigation} >ScreenHome</Button>
            <Button navigation={navigation} >ScreenMyTest</Button>
            <TextBox>ScreenSetting</TextBox>
        </View>

    );
};