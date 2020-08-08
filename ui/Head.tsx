import React from 'react';
import {
    StyleSheet
} from 'react-native';
import {
    Left,
    Right, Header, Icon, Body, Title, Button
} from 'native-base';

const Head = () => {
    return (
        <Header style={styles.header}>
        <Left>
            <Button transparent>
                <Icon name='arrow-back' />
            </Button>
        </Left>
        <Body>
            <Title>My Header</Title>
        </Body>
        <Right>
            <Button transparent>
                <Icon name='menu' />
            </Button>
        </Right>
    </Header>
    )
}


const styles = StyleSheet.create({
    header: {
        marginTop: 60,
    }
});


export default Head;