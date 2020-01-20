import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Clicker Beats</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: '#dfdfdf'
    },
    viewStyle: {
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        

    }
});


export default Header;