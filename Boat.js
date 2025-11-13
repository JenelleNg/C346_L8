import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const bstyles = StyleSheet.create({
    boxtitle: {
        flex: 1,
        backgroundColor: 'royalblue4',
        justifyContent: 'flex-start',
        borderColor: 'navy',
        borderWidth: 2,
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    boatbox: {
        flex: 1,
        backgroundColor: '#89CFF0',
        justifyContent: 'flex-start',
        borderColor: '#0047AB',
        borderWidth: 2,
        margin: 10,
        textAlign: 'center',
        borderRadius: 20,
    },
    textbox: {
        flex: 1,
        backgroundColor: '#F0FFFF',
        justifyContent: 'flex-start',
        borderColor: '#F0FFFF',
        borderWidth: 5,
        margin: 20,
        textAlign: 'center',
        borderRadius: 10,

    },
    imagesize: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        width: 375,
        height: 300,
        alignSelf: 'center',
        borderRadius: 20,
    },
});

const Boat = ({name, description, icon_name, icon_color, picture}) => {
    return (
        <View style={bstyles.boatbox}>
            <Text style={[bstyles.boxtitle, {fontSize: 20, fontFamily: 'serif', color: 'white', textTransform: 'uppercase'}]}>
                <FontAwesome6 name={icon_name} size={20} color={icon_color} /> {name}
            </Text>
            <Text style={[bstyles.textbox, {color: 'black', fontFamily: 'monospace'}]}>
                {description}
            </Text>
            <Image source={picture}
                   style={bstyles.imagesize}
            />
            <Text></Text>
        </View>
    );
};

export default Boat;