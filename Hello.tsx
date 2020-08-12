import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

const Hello = () => {
    return (
   
            <View>
                <Text style={styles.hello}>Hello Partner</Text>
            </View>
      
    )
}


const styles = StyleSheet.create({
    hello: {
      backgroundColor: '#00ff00',
    },
  });


export default Hello
