import React, { useState } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import CustomSlider from './CustomSlider/CustomSlider';
import PlayButton from './PlayButton/PlayButton';
import CustomButton from './CustomButton/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import CustomPicker from './CustomPicker/CustomPicker';

const Layout = () => {
    const [bpm, setBpm] = useState(140);
    const [beat, setBeat] = useState(1);

    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.viewStyle}>
        <View >
            <CustomSlider 
                setBpmValue={() => setBpm} 
                value={bpm} 
            />
            
            <View style={styles.counterBtnStyle}>
                <CustomButton
                    styles={{
                        fontSize: 50
                    }}
                    label="-"
                    onClick={() => setBpm(bpm-1)} 
                />
                    <View style={styles.currentStyle}>
                        <Text style={styles.currentTextStyle}>Current BPM:</Text>
                        <Text style={styles.currentBpmStyle}>{bpm}</Text>
                    </View>
                
                <CustomButton 
                    styles={{
                        fontSize: 40,
                        paddingTop: 8
                    }}
                    label="+"
                    onClick={() => setBpm(bpm+1)} 
                />
            </View>
            <PlayButton currentBpmValue={bpm} currentBeatValue={beat} />

            <View style={styles.beatsStyle}>
                <Text>Beats per bar:</Text>
                <CustomPicker setBeatValue={() => setBeat} value={beat}  />
            </View>


        </View>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    currentStyle: {
        paddingTop: 18,
        flexDirection: 'row'
    },
    currentTextStyle: {
        paddingTop: 8,
        paddingRight: 10
    },
    currentBpmStyle: {
        fontSize: 25,
    },
    counterBtnStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    beatsStyle: {
        paddingTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});

export default Layout;