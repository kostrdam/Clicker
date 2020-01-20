import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

const CustomSlider = ({setBpmValue}) => {
    return (
        <View style={styles.viewStyle}>
            <Slider 
                style={styles.sliderStyle} 
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                thumbTintColor="#FFFFFF"
                minimumValu={1}
                maximumValue={300}
                step={1}
                value={140}
                onValueChange={setBpmValue()}
                onSlidingComplete={setBpmValue()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    sliderStyle: {
        width: 300, 
        height: 40
    },
    viewStyle: {
        width: 350,
        alignItems: 'center'
    }
});

export default CustomSlider;