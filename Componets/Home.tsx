import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.hometxt}>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 30,
    },
    hometxt: {
        fontWeight: "bold",
        fontSize: 30,
    }
})
