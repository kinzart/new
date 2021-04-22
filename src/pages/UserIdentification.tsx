import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/button';


export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();


    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }
    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <Text style={styles.emoji}>
                            {isFilled ? '🍀🌻🌵🌿🌱' : '🍁🥀🍂'}
                        </Text>
                        <Text style={styles.title}>
                            Como podemos {'\n'}
                        avisar você ?

                    </Text>
                        <TextInput
                            style={[
                                styles.input,
                                isFocused && { borderColor: colors.green }
                            ]}
                            placeholder="Digite seu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.footer}>
                            <Button />
                        </View>


                    </View>

                </View>
            </KeyboardAvoidingView>
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
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20,
    }
});
