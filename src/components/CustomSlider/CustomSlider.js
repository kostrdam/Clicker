import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

const CustomSlider = ({setBpmValue, value}) => {
    return (
        <View style={styles.viewStyle}>
            <Slider 
                style={styles.sliderStyle} 
                minimumTrackTintColor="#425787"
                maximumTrackTintColor="#3b5998"
                thumbTintColor="#000000"
                minimumValue={1}
                maximumValue={300}
                step={1}
                value={value}
                onValueChange={setBpmValue()}
                onSlidingComplete={setBpmValue()}
            />
        </View>
        
    )
};

const styles = StyleSheet.create({
    sliderStyle: {
        width: 300, 
        height: 40,
        
    },
    viewStyle: {
        paddingTop: 30,
        paddingBottom: 10,
        width: 350,
        alignItems: 'center'
    }
});

export default CustomSlider;