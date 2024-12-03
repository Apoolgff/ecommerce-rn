import React from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

const Categories = ({ categories, onCategorySelect }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <View style={styles.buttonContainer}>
          <Button title={item} onPress={() => onCategorySelect(item)} />
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonContainer: {
    marginVertical: 5,
  },
});

export default Categories;
