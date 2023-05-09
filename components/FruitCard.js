import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React from 'react'
import { BanknotesIcon, StarIcon } from 'react-native-heroicons/outline';

const FruitCard = ({
    id, 
    title, 
    imgUrl, 
    rating, 
    short_description, 
    address, 
    price,
}) => {
  return (
    <TouchableOpacity style={cardStyles.border}>
        <Image
            source={{uri: imgUrl}}
            style={cardStyles.card}
        />

        <View style={cardStyles.container}> 
            <Text style={cardStyles.textItem}>{title}</Text>
            <View style={cardStyles.containerItem}>
                <StarIcon color="green" opacity={0.5} size={22}/>
                <Text style={cardStyles.textInfo}>
                    <Text style={cardStyles.star}>{rating}</Text>
                </Text>
            </View>
        </View>

        <View style={cardStyles.containerItem}>
            <BanknotesIcon color="gray" opacity={0.4} size={22}/>
            <Text style={cardStyles.textInfo}>{price} tg/kg</Text>
        </View>
    </TouchableOpacity>
  )
}

const cardStyles = StyleSheet.create({
    card: {
        height: 100,
        width: 150,
        borderRadius: 15, 
    },
    container: {
        paddingHorizontal: 3,
        paddingBottom: 4,
      },
    textItem: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 2,
      },
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    textInfo: {
        fontSize: 12, 
        color: '#777', 
        marginHorizontal: 4,
      },
    star: {
        color: 'green', 
      },
    border: {
        backgroundColor: '#ffffff', 
        marginRight: 3,
        borderRadius: 15,
        overflow: 'hidden',
        position: 'relative',
        marginHorizontal: 4,
      },
  });

export default FruitCard