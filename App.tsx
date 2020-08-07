import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import {
    Container, Content, Left,
    Right, Header, Icon, Body, Title, Button
} from 'native-base';
import { useFonts } from 'expo-font';
//import { Ionicons } from '@expo/vector-icons';
import Expo from 'expo';
import { AppLoading } from 'expo';




export default function App() {
    const [copy, setCopy] = useState('');
    const [tip, setTip] = useState(0.2)
    const [customTip, setCustomTip] = useState<string | undefined>()
    //const [isReady, setIsReady] = useState(false)

    let [loaded, error] = useFonts({
        // 'Roboto': require('native-base/Fonts/Roboto.ttf'),
        // 'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
     });

     


    // useEffect(() => {
    //     async function loadFonts() {
    //         await Font.loadAsync({
    //             Roboto: require('native-base/Fonts/Roboto.ttf'),
    //             Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    //             ...Ionicons.font,
    //         });
    //         setIsReady(true);
    //     }
    // }, []);



    useEffect(() => {
        if (customTip) {

            setTip(parseFloat(customTip) / 100)
        } else {
            setTip(0)
        }

    }, [customTip])

    //
if (!loaded) {
    return  <AppLoading />;
} else  {


    return (
          
                <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Header</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Right>
                    </Header>
                    <Content padder>
                        <View style={styles.container}>
                            <Text>{copy && (Math.round(parseFloat(copy) * tip * 100) / 100).toFixed(2)}</Text>
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
                        </View>
                    </Content>
                </Container>
                 
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
   
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
        fontFamily: 'Inter-SemiBoldItalic',
        color: '#fff',
    }
});
