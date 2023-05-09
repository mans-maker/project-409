import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title }) => {
  return (
    <TouchableOpacity>
        <Image 
          source={{uri: imgUrl}}
          style={cardStyles.cardOne}
        />
    </TouchableOpacity>

  )
}

const cardStyles = StyleSheet.create({
    cardOne: {
        height: 150,
        width: 300,
        borderRadius: 15, 
        marginHorizontal: 4,
    },
  });

export default CategoryCard