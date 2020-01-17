import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';

class CustomButton extends Component {
    render() {
        return (
            <Button onPress={this.playSound}
                    title='Play Sound'
            >
            </Button>
        );
    }

    playSound() {

    }
    
};

const styles = StyleSheet.create({
    buttonStyle: {

    }
});

export default CustomButton;