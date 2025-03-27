import { View, Text, Button, StyleSheet } from 'react-native';

const D1 = ({ onClose }) => {

  return (
    <View style={styles.container}>
      <Text>D1</Text>
      <Button title="Back" onPress={onClose} />
    </View>

  );
};

export default D1;


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

