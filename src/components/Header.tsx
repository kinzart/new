import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import colors from '../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import userImg from '../assets/perfil.png';
import fonts from '../styles/fonts';


export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Ricardo</Text>
            </View>

            <Image source={userImg} style={styles.perfilImg} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        backgroundColor: colors.green,
        paddingHorizontal: 30

    },
    perfilImg: {
        width: 70,
        height: 70,
        borderRadius: 40,

    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40,
    }
})