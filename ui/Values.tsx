import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'


type Props = {
    bill: string;
    tipPercent: number;
}

const Values: React.FC<Props> = ({ bill, tipPercent }) => {
    const [total, setTotal] = useState(0)
    const [tip, setTip] = useState(0)
    useEffect(() => {

        if (bill) {
            setTip((parseFloat(bill) * tipPercent))
        } else {
            setTotal(0)
        }

    }, [bill, tipPercent])


    useEffect(() => {
        if (bill) {
            setTotal(parseFloat(bill) + tip)
        } else {
            setTotal(0)
        }

    }, [tip])



    return (
        <View style={styles.values}>
            <Text style={styles.label}>Tip</Text>
            <Text style={styles.tip}>${tip.toFixed(2)}</Text>
            <Text style={styles.label}>Total Bill</Text>
            <Text style={styles.total}>${total.toFixed(2)}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    values: {
        alignItems: 'center',
        backgroundColor: '#484848',
        flex: 1
    },
    label: {
        color: '#fff'
    },
    tip: {
        color: '#fff',
        fontSize: 60,
        fontWeight: 'bold'
    },
    total: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }

});


export default Values;
