import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const D1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>D1</Text>
      <Button
        title="Back"
        onPress={() => navigation.navigate('BottomTab', { screen: 'B3', params: { screen: 'T3' } })}
      />
    </View>
  );
};

export default D1;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
