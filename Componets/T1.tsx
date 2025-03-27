import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const T1 = () => {
    return (
       
        <View style={styles.container}>
            <Text>T1</Text>
        </View>
    )
}

export default T1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
