import React from 'react'
import { Image, TouchableOpacity, Dimensions } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { View } from "react-native";
const deviceWidth = Dimensions.get("window").width;

export class HeaderSearch extends React.Component {
    render() {
        return (
            //Add your logo in the image tag
            <View >

            </View>
        );
    }
}

export class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} ><Icon name="md-menu" size={40} style={{ color: 'white', marginLeft: deviceWidth / 20 }} /></TouchableOpacity>
        );
    }
}

export class RightMenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} ><Icon name="md-cart" size={40} style={{ color: 'white', marginRight: deviceWidth / 20 }} /></TouchableOpacity>
        );
    }
}



/*
<View >
                <Image
                    source={require('../../assets/dash.png')}
                    resizeMode="contain"
                    style={{
                        width: 50,
                    }}
                />
            </View>
            */