import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const T3 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>T3</Text>
            <Button title='Click to open drawer' onPress={() => navigation.openDrawer()} />
        </View>
    );
};

export default T3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
