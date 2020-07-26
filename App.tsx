import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import Hello from './Hello'




export default function App() {
    const [copy, setCopy] = useState('');
    const [tip, setTip] = useState(0.2)
    const [customTip, setCustomTip] = useState<string | undefined>()

    useEffect(() => {
        if (customTip ) {
            
            setTip(parseFloat(customTip)/100)
        } else  {
            setTip(0)
        }
       
    }, [customTip])


    return (
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
                    title='10%'
                    onPress={() => setTip(.10)}
                />
                <Button
                    title='20%'
                    onPress={() => setTip(.20)}
                />
                <Button
                    title='30%'
                    onPress={() => setTip(.30)}
                />
                <TextInput 
                    style={styles.customInput}
                    placeholder='custom tip'
                    keyboardType='numeric'
                    onChangeText={(customTip) => setCustomTip(customTip)}
                    value={(tip *100).toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
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
        
    }
});
