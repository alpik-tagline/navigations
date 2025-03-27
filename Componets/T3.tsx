import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const T3 = () => {
  

    return (
        <View style={styles.container}>
            <Text>T3</Text>
            <Button title='Click to open drawer' />
        </View>
    )
}

export default T3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
