import { View, Text, ScrollView, StyleSheet, TextInput, Image,TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <SafeAreaView style={welcomeStyles.container}>
      <View>
      <Image
            source={require('./my-icon.jpeg')}
            style={welcomeStyles.mainLogo}
            resizeMode="contain"
        />
      <TouchableOpacity style={welcomeStyles.button} onPress={handlePress}>
        <Text style={welcomeStyles.buttonText}>Make a Purchase</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const welcomeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e3eff8',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 90,
    },
    mainLogo: {
      width: 250,
      height: 250,
    },
    button: {
      backgroundColor: '#35d0ba',
      padding: 10,
      borderRadius: 25,
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
});

export default WelcomeScreen