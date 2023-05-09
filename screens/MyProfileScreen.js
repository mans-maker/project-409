import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const MyProfileScreen = () => {

  const navigation = useNavigation();
  const handleInProgress = () => {
    navigation.navigate('InProgress');
  };

  const handleLogout = () => {
    //
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>My Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>maksat.madeniyetov@gmail.com</Text>
      </View>
      <TouchableOpacity style={styles.inprogressButton} onPress={handleInProgress}>
        <Text style={styles.ButtonText}>In Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.noButton} onPress={handleLogout}>
        <Text style={styles.ButtonText}>Add Product</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.noButton} onPress={handleLogout}>
        <Text style={styles.ButtonText}>My Products for Sale</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.noButton} onPress={handleLogout}>
        <Text style={styles.ButtonText}>My Products Notfor Sale</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.ButtonText}>Logout</Text>
      </TouchableOpacity>
      
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#e3eff8',
  },
  name: {
    fontSize: 24,
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

export default MyProfileScreen;
