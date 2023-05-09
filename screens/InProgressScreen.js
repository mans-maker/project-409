import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect  } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Purchases from '../components/Purchases';
import PurchasesCard from '../components/PurchasesCard';
import { useNavigation } from '@react-navigation/native'

const InProgressScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        })
      }, []);

  return (
    <SafeAreaView>
        <View style={styles.back}>
      <Text style={styles.name}>Purchase requests for your products</Text>
      <ScrollView>
        <PurchasesCard
            email="email: aaaaa-a1990@list.ru"
            date="09-04-2023"
            total="Total: 3000 tg"
            item="3 KG Pear"
            number="Phone Number: 45454545"
        />
        <PurchasesCard
            email="email: aaaaa-a1990@list.ru"
            date="21-04-2023"
            total="Total: 1800 tg"
            item="3 KG Spartan Apple"
            number="Phone Number: 45454545"
        />
        <PurchasesCard
            email="email: aaaaa-a1990@list.ru"
            date="18-04-2023"
            total="Total: 1800 tg"
            item="3 KG Spartan Apple"
            number="Phone Number: 45454545"
        />
        <PurchasesCard
            email="email: zhaqsylyq25@gmail.com"
            date="09-04-2023"
            total="Total: 3000 tg"
            item="5 KG Spartan Apple"
            number="Phone Number: +7(715)615-61-56"
        />
        <PurchasesCard
            email="email: aaaaa-a1990@list.ru"
            date="14-04-2023"
            total="Total: 3000 tg"
            item="3 KG Pear"
            number="Phone Number: 45454545"
        />
        <PurchasesCard
            email="email: aaaaa-a1990@list.ru"
            date="21-04-2023"
            total="Total: 1500 tg"
            item="3 KG Lemon"
            number="Phone Number: 45454545"
        />
        <PurchasesCard
            email="email: aaaaa-a1990@list.ru"
            date="21-04-2023"
            total="Total: 1500 tg"
            item="3 KG Lemon"
            number="Phone Number: 45454545"
        />
        <PurchasesCard
            email="email: maksat.madeniyetov@gmail.com"
            date="20-04-2023"
            total="Total: 1800 tg"
            item="3 KG Banana"
            number="Phone Number: +7(705)465-85-66"
        />
      </ScrollView>
    </View>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20,
      backgroundColor: '#e3eff8',
    },
    back: {
        backgroundColor: '#e3eff8',
      },
    name: {
      fontSize: 19,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    infoLabel: {
      marginRight: 10,
      fontWeight: 'bold',
      width: 70,
    },
    infoValue: {
      flex: 1,
    },
    inprogressButton: {
      backgroundColor: '#35d0ba',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,
      marginTop: 40,
    },
    logoutButton: {
      backgroundColor: 'red',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,
      marginTop: 40,
    },
    noButton: {
      backgroundColor: 'gray',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,
      marginTop: 40,
    },
    ButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });
  
export default InProgressScreen