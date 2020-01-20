import React, {Component} from 'react';
import { StyleSheet, Picker } from 'react-native';


class CustomPicker extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <Picker
                style={styles.pickerStyle}
                mode='dropdown'
                selectedValue={this.props.value}
                onValueChange={this.props.setBeatValue()}>
                {this.renderList()}
            </Picker>
            
        );
    }

    handleChange() {

    }

    renderList() {
        var items = [];
        for(var i=1; i<13; i++) {
            items.push(i);
        }
        
        return items.map(item => (
            <Picker.Item label={item.toString()} value={item} key={item} />
        ));
    }
    
};

const styles = StyleSheet.create({
    pickerStyle: {
        height: 50, 
        width: 100,
    },
    itemStyle: {
        backgroundColor: "#566573"
    }
});

export default CustomPicker;