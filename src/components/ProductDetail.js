import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.stock}>Stock: {product.stock}</Text>
      <Text style={styles.rating}>Rating: {product.rating}⭐</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#1e90ff',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  stock: {
    fontSize: 16,
    color: '#555',
  },
  rating: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default ProductDetail;
