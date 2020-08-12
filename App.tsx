import React, { useState, useEffect } from 'react';
import {
    StyleSheet, TextInput, Text, View, Alert
} from 'react-native';
import {
    Container, Content, Button, Icon
} from 'native-base';
import {
    useFonts,
    Inter_900Black,
} from '@expo-google-fonts/inter';

import { AppLoading } from 'expo';
import Head from './ui/Head'
import Values from './ui/Values'




export default function App() {
    const [copy, setCopy] = useState('');
    const [tip, setTip] = useState(0.2)
    const [customTip, setCustomTip] = useState<string | undefined>()
    //const [isReady, setIsReady] = useState(false)

    let [isLoaded, error] = useFonts({
        Inter_900Black,
    });



    useEffect(() => {
        if (customTip) {

            setTip(parseFloat(customTip) / 100)
        } else {
            setTip(0)
        }

    }, [customTip])

    //
    if (!isLoaded) {
        return <AppLoading />;
    } else {


        return (

            <Container>
                <Head />
                <View style={styles.container}>
                    <Content contentContainerStyle={styles.content}>
 
                        <Values
                            bill={copy}
                            tipPercent={tip}
                        />
                        <TextInput
                            value={copy}
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='0.00'
                            onChangeText={text => setCopy(text)} />
                        <View style={styles.buttonGroup}>
                            <Button
                                onPress={() => setTip(.10)}
                            >
                                <Text style={styles.btnStyle}>
                                    '10%'
                                        </Text></Button>
                            <Button
                                onPress={() => setTip(.20)}
                            ><Text>'20%'</Text></Button>
                            <Button
                                onPress={() => setTip(.30)}
                            ><Text>'30%'</Text></Button>
                            <TextInput
                                style={styles.customInput}
                                placeholder='custom tip'
                                keyboardType='numeric'
                                onChangeText={(customTip) => setCustomTip(customTip)}
                                value={(tip * 100).toString()}
                            />
                        </View>
                    </Content>
                </View>
            </Container>


        );
    }
}
const styles = StyleSheet.create({
    header: {
        marginTop: 60,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        alignItems: 'center',
        fontFamily: ' Inter_900Black',
        height: '100%',
        width: '100%',

    },
    content: {
        width: '100%',
    },
    centerChild: {
        justifyContent: 'center'
    },
    input: {
        height: 80,
        width: '100%',
        borderColor: '#333',
        borderWidth: 1,
        padding: 5,
    },
    customInput: {
        height: 40,
        width: 100,
        borderColor: '#333',
        borderWidth: 1,
        padding: 5,

    },
    buttonGroup: {
        flexDirection: 'row',

    },
    btnStyle: {

        color: '#fff',
    }
});
