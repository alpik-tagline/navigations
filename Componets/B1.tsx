import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'

const B1 = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.hometxt}>B1</Text>
        </View>
    )
}
export default B1

const styles = StyleSheet.create({

    header: {
        display: 'flex',
        alignItems: 'center',
    },

    hometxt: {
        fontWeight: "bold",
        fontSize: 30,
    }

})



