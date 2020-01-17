import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomSlider from './CustomSlider/CustomSlider';
import CustomButton from './CustomButton/CustomButton';

const Layout = () => {
    const [bpm, setBpm ] = useState(140);
    return (
        <View style={styles.wrapperStyle}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Set BPM:</Text>
            </View>
            <CustomSlider setValue={setBpm} />
            <Text>Current BPM: {bpm}</Text>
            <CustomButton />
        </View>
    )
};

const styles = StyleSheet.create({
    wrapperStyle: {
        backgroundColor: '#63707e',
        flex: 1
    },
    viewStyle: {
        alignItems: 'center',
        paddingTop: 15,
        height: 40
    },
    textStyle: {
        fontSize: 20
    }
});

export default Layout;