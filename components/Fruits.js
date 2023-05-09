import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import FruitCard from './FruitCard'

const Fruits = ({id, title, description}) => {
  return (
    <View style={fruitStyles.bckColor}>
      <View style={fruitStyles.container}>
        <Text style={fruitStyles.text}>{title}</Text>
        <ArrowRightIcon color="#00425A" />
      </View>

      <Text style={fruitStyles.textDescription}>{description}</Text>
    
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={fruitStyles.scrollDesign}
    >
        <FruitCard     
            id={123}
            title="Apple"
            imgUrl="https://pibig.info/uploads/posts/2022-11/1669203534_2-pibig-info-p-yabloki-aport-pinterest-2.jpg"
            rating={4}
            short_description="Aport from Almaty"
            address="Abayeva 43, Koshy"
            price={600}
        />

        <FruitCard     
            id={123}
            title="Apple"
            imgUrl="https://pibig.info/uploads/posts/2022-11/1669203534_2-pibig-info-p-yabloki-aport-pinterest-2.jpg"
            rating={4}
            short_description="Aport from Almaty"
            address="Abayeva 43, Koshy"
            price={600}
        />

        <FruitCard     
            id={123}
            title="Apple"
            imgUrl="https://pibig.info/uploads/posts/2022-11/1669203534_2-pibig-info-p-yabloki-aport-pinterest-2.jpg"
            rating={4}
            short_description="Aport from Almaty"
            address="Abayeva 43, Koshy"
            price={600}
        />

        <FruitCard     
            id={123}
            title="Apple"
            imgUrl="https://pibig.info/uploads/posts/2022-11/1669203534_2-pibig-info-p-yabloki-aport-pinterest-2.jpg"
            rating={4}
            short_description="Aport from Almaty"
            address="Abayeva 43, Koshy"
            price={600}
        />

      </ScrollView>
    </View>
  )
}

const fruitStyles = StyleSheet.create({
    container: {
      marginTop: 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 4,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18, 
        color: "#00425A",
      },
    textDescription: {
        fontWeight: 'bold',
        color: '#9CA3AF',
        fontSize: 12, 
        marginHorizontal: 4,
      },
    scrollDesign: {
        paddingTop: 4,
        paddingHorizontal: 15,
        marginVertical: 4,
      },
    bckColor: {
      backgroundColor: '#EDF1D6',
    }
  });

export default Fruits