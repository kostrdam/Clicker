import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomSlider from './CustomSlider/CustomSlider';
import PlayButton from './PlayButton/PlayButton';

const Layout = () => {
    const [bpm, setBpm] = useState(140);
    return (
        <View style={styles.viewStyle}>
            <Text>Set BPM:</Text>
            <CustomSlider setBpmValue={() => setBpm} />
            <Text>Current BPM: {bpm}</Text>
            <PlayButton currentBpmValue={bpm} />
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#7a7a7a",
        flex: 1
    }
});

export default Layout;