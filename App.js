import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/components/Header';
import ProductDetail from './src/components/ProductDetail';
import Categories from './src/components/Categories';
import ProductListByCategory from './src/components/ProductListByCategory';
import productsData from './src/data/products.json';

const Stack = createStackNavigator();

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(productsData.map((product) => product.category))];

  const filterByCategory = (category) =>
    productsData.filter((product) => product.category === category);

  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen name="Categories" options={{ title: 'Categories' }}>
          {({ navigation }) => (
            <Categories
              categories={categories}
              onCategorySelect={(category) => {
                setSelectedCategory(category);
                navigation.navigate('ProductListByCategory');
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="ProductListByCategory"
          options={{ title: 'Products' }}
        >
          {({ navigation }) => (
            <ProductListByCategory
              products={filterByCategory(selectedCategory)}
              onViewDetails={(product) => navigation.navigate('ProductDetail', { product })}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: 'Product Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
