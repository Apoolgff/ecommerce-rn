import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import Searcher from './Searcher';

const ProductListByCategory = ({ products, onViewDetails }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      Object.values(product)
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Searcher placeholder="Search products..." onSearch={handleSearch} />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard product={item} onViewDetails={onViewDetails} />
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
});

export default ProductListByCategory;
