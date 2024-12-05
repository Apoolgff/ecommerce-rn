import React, { useState } from 'react';
import { FlatList, Text, StyleSheet, Pressable } from 'react-native';
import Searcher from './Searcher';

const Categories = ({ categories, onCategorySelect }) => {
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const handleSearch = (query) => {
    const filtered = categories.filter((category) =>
      category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <>
      <Searcher placeholder="Search categories..." onSearch={handleSearch} />
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onCategorySelect(item)}
            style={({ pressed }) => [
              styles.buttonContainer,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Categories;
