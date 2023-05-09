import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView style={categoriesStyles.categoryOne} horizontal showsHorizontalScrollIndicator={false}>
        <CategoryCard
            imgUrl="http://natural-goods.s3-website.eu-north-1.amazonaws.com/static/media/main.63c23a3d7b6500bb75d7.jpg"
            title="Test 1"
        />
        <CategoryCard
            imgUrl="https://wallpaperaccess.com/full/1462795.jpg"
            title="Test 2"
        />
        <CategoryCard
            imgUrl="https://northernnester.com/wp-content/uploads/2020/10/types-of-vegetables.jpg"
            title="Test 3"
        />
    </ScrollView>
  )
}

const categoriesStyles = StyleSheet.create({
    categoryOne: {
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: '#EDF1D6',
      },
  });

export default Categories