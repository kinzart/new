import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,

} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/button';
import { useNavigation } from '@react-navigation/core';


export function Confirmation() {

    const navigation = useNavigation()

    function handleMoveOn() {
        navigation.navigate('PlantSelect');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    🍀
                        </Text>

                <Text style={styles.title}>
                    Como podemos {'\n'}
                        avisar você ?
                        </Text>

                <Text style={styles.subtitle}>
                    Agora vamos cuidar das suas {'\n'}
                        plantinhas com muito cuidado...
                        </Text>


                <View style={styles.footer}>
                    <Button
                        title="Começar"
                        onPress={handleMoveOn}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,

    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
        width: '100%',
    },
    emoji: {
        fontSize: 48,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
        width: '100%',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
        lineHeight: 32,
    },
    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
        paddingVertical: 20
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
});
