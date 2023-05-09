import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import PurchasesCard from './PurchasesCard'

const Purchases = ({email}) => {
  return (
    <View style={styles.bckColor}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollDesign}
        >
            <PurchasesCard     
                email="aaaaa-a1990@list.ru"
                date="09-04-2023"
                total={3000}
                item="3 KG Pear"
                number={45454545}
            />

            <PurchasesCard     
                email="aaaaa-a1990@list.ru"
                date="09-04-2023"
                total={3000}
                item="3 KG Pear"
                number={45454545}
            />  

            <PurchasesCard     
                email="aaaaa-a1990@list.ru"
                date="09-04-2023"
                total={3000}
                item="3 KG Pear"
                number={45454545}
            />

         </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
    scrollDesign: {
        paddingTop: 4,
        paddingHorizontal: 15,
        marginVertical: 4,
      },
    bckColor: {
      backgroundColor: '#EDF1D6',
    }
  });

export default Purchases