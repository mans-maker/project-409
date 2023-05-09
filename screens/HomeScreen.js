import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {ChevronDownIcon, UserIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import Fruits from '../components/Fruits'

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleProfile = () => {
      navigation.navigate('MyProfile');
    };
  

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.containerHeader}>
        <Image
            source={require('./my-icon1.png')}
            style={styles.logo}
        />
        <View style={styles.container}>
            <Text style={styles.textCompany}>Natural Goods</Text>
            <Text style={styles.textLocation}>
                Location
                <ChevronDownIcon size={20} color="#00425A" />
            </Text>
        </View>
        <TouchableOpacity onPress={handleProfile}>
            <UserIcon size={35} color="#00425A"/>
        </TouchableOpacity>

      </View>

      <View style={styles.containerHeader}>
        <View style={styles.search}>
            <MagnifyingGlassIcon size={20} color="gray"/>
            <TextInput
                placeholder='Search'
                keyboardType='default'
            />
        </View>
        <AdjustmentsHorizontalIcon color="#00425A" />
      </View>

      <ScrollView style={styles.scrollBack}>
        <Categories/>

        <Fruits
          id="123"
          title="Fruits"
          description="Discover the Best Fruits from Local Farms!"
        />

        <Fruits
          id="123"
          title="Vegetables"
          description="Discover the Best Vegetables from Local Farms!"
        />

        <Fruits
          id="123"
          title="Drinks"
          description="Refresh Yourself With our Locally Sourced Drinks!"
        />

        <Fruits
          id="123"
          title="Meats"
          description="Quality You Can Trust!"
        />
      </ScrollView>

      
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        paddingBottom: 3,
        alignItems: 'center',
        marginHorizontal: 4,
        // justifyContent: 'space-between',
      },
    container: {
        flex: 1,
      },
    logo: {
        height: 32,
        width: 32, 
        backgroundColor: '#e5e7eb',
        padding: 24,
        borderRadius: 9999,
        marginHorizontal: 4,
      },
    textCompany: {
        fontWeight: 'bold',
        color: '#00425A',
        fontSize: 12, 
        marginHorizontal: 4,
      },
    textLocation: {
        fontWeight: 'bold',
        fontSize: 24, 
        marginHorizontal: 4,
      },
    search: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 12,
        alignItems: 'center',
        marginHorizontal: 8,
      },
    backGround: {
        backgroundColor: '#e3eff8',
        paddingTop: 20,
      },
    scrollBack: {
      backgroundColor: '#F3F4F6',
      paddingBottom: 10,
    }
  });

export default HomeScreen