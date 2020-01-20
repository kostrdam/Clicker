import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';

var PlayIcon = require('./../../../resources/play.png');
var PauseIcon = require ('./../../../resources/pause.png');

class PlayButton extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            bpm: this.props.currentBpmValue,
            isPlaying: false
        }
    }

    componentDidMount() {
        this.sound = new Sound(
            "click.wav",
            Sound.MAIN_BUNDLE,
            error => {
                if (error) {
                    console.log("failed to load the sound", error);
                    return;
                }
                sound.play(() => sound.release());
            }
        );

        this.soundPulse = new Sound(
            "click_pulse.wav",
            Sound.MAIN_BUNDLE,
            error => {
                if (error) {
                    console.log("failed to load the sound", error);
                    return;
                }
                soundPulse.play(() => soundPulse.release());
            }
        );

        
    }



    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.playButtonToggle.bind(this)}>
                    <Image 
                        source={this.renderIcon()} 
                        style={styles.iconStyle} />
                </TouchableOpacity>
                <Text>{this.props.currentBpmValue} {this.state.isPlaying.toString()}</Text>
            </View>
        );
    }

    renderIcon(){
        if(this.state.isPlaying === false) {
            return PlayIcon;
        }
        else {
            return PauseIcon;
        }
        
    }

    playButtonToggle() {
        this.setState({isPlaying: !this.state.isPlaying}, () => {
            this.handleSound();
        });
            
    }

    handleSound() {
        if(this.state.isPlaying === true) {
            //this.sound.setNumberOfLoops(-1);
            //this.sound.play()
            var counter = 0;
            this.metronome = setInterval(() => {
                if(counter === 0) {
                    this.soundPulse.stop(() => {
                        this.soundPulse.play();
                    })
                    counter++;
                }
                else {
                    this.sound.stop(() => {
                        this.sound.play();
                    })
                    counter++;
                }
                if(counter === 4) {
                    counter = 0;
                }
            }, this.countBeats());
        }
        else {
            clearInterval(this.metronome);
        }
    }

    countBeats() {
        console.log(60 * 1000 / this.props.currentBpmValue);
        return (60 * 1000 / this.props.currentBpmValue);
    }

};

const styles = StyleSheet.create({
    iconStyle: {
        width: 100,
        height: 100
    }
});

export default PlayButton;