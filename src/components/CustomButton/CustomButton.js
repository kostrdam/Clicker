import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';

class CustomButton extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Button 
                    style={styles.buttonStyle}
                    onPress={this.playSound}
                    title='Play Sound'
                >
                </Button>
            </View>
        );
    }

    playSound() {

    }
    
};

const styles = StyleSheet.create({
    buttonStyle: {
       
    },
    viewStyle: {
        width: 150,
        height: 50,
        marginTop: 100,
        marginHorizontal: 100
    }
});

export default CustomButton;