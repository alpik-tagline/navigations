import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native'; // Import this

const T3 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>T3</Text>
            <Button
                title='Click to open drawer'
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
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
