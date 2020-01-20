import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.addOne = this.addOne.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    render() {
        return (
            <TouchableOpacity onPressIn={this.addOne} onPressOut={this.stopTimer}>
                <Text style={[styles.labelStyle, this.props.styles]}>{this.props.label}</Text>
            </TouchableOpacity>
        )
    }

    addOne() {
        this.props.onClick();
        this.timer = setTimeout(this.addOne, 200);
      }
    
      stopTimer() {
        clearTimeout(this.timer);
      }

};

const styles = StyleSheet.create({
    labelStyle: {
    }
});

export default CustomButton;