import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductCard from './ProductCard';

const ProductListByCategory = ({ products, onViewDetails }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard product={item} onViewDetails={onViewDetails} />
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ProductListByCategory;
