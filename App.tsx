import React, { useState, useEffect } from 'react';
import {
    StyleSheet, TextInput, View, Button
} from 'react-native';
import {
    Container, Content
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
                    <Content style={styles.content}>
                        <Values
                            bill={copy}
                            tipPercent={tip}
                        />
                        <View style={styles.inputs}>
                            <TextInput
                                value={copy}
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='0.00'
                                placeholderTextColor="#FFF"
                                underlineColorAndroid="#FFF"
                                onChangeText={text => setCopy(text)} />
                            <View style={styles.buttonGroup}>
                                <Button
                                    title='10%'
                                    onPress={() => setTip(.10)}
                                ></Button>
                                <Button
                                    title='20%'
                                    onPress={() => setTip(.20)}
                                ></Button>
                                <Button
                                    title='30%'
                                    onPress={() => setTip(.30)}
                                ></Button>
                                <TextInput
                                    style={styles.customInput}
                                    placeholder='custom tip'
                                    placeholderTextColor="#FFF"
                                    keyboardType='numeric'
                                    onChangeText={(customTip) => setCustomTip(customTip)}
                                    value={(tip * 100).toString()}
                                />
                            </View>
                        </View>
                    </Content>
                </View>
            </Container>


        );
    }
}
const styles = StyleSheet.create({
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
        flex: 1,
    },
    inputs: {
        backgroundColor:'#212121',
        padding: 20,
       
    },
    input: {
        height: 80,
        flex:1,
        padding: 5,
        color: '#FFF',
        borderBottomColor: 'red',
        borderWidth: 1
    },
    customInput: {
        height: 40,
        width: 60,
        borderColor: '#333',
        padding: 5,
        color: '#FFF'

    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    btnStyle: {
        color: '#fff',
    }
});
