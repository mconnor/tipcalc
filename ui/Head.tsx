import React from 'react';
import {
    StyleSheet
} from 'react-native';
import {
    Left,
    Right, Header, View, Body, Title
} from 'native-base';

const Head = () => {
    return (
        <View style={styles.header}>
            <Header>
                <Left>
                </Left>
                <Body>
                    <Title>Tip Calculator</Title>
                </Body>
                <Right>
                </Right>
            </Header>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        marginTop: 60,
    }
});


export default Head;