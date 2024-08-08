import React from 'react';
import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  PhoneNumber: any;
  // other screens can be added here
};

type SplashScreenProps = NativeStackScreenProps<RootStackParamList>;

const Homescreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.logoPlaceholder} />
      <Image source={{ uri: '/assets/images/logo.png' }} style={styles.logo} />

      <Text style={styles.title}>Smile Starts Here</Text>
    

      <View style={styles.buttonContainer}>
        {['Fast', 'Powerful', 'Secure', 'Private', 'Unlimited', 'Synced', 'Reliable'].map((text) => (
          <TouchableOpacity key={text} style={styles.featureButton}>
            <Text style={styles.featureText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.subtitle}>Let's Talk Tech</Text>
      <TouchableOpacity 
        style={styles.startButton}
        onPress={() => navigation.navigate('PhoneNumber')}
      >
        <Text style={styles.startButtonText}>Start Messaging</Text>
      </TouchableOpacity>
      
      <Text style={styles.footerText}>Developed by ZeeXec Digital Solutions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 200,
    height: "auto",
  },
  logoPlaceholder: {
    width: 200,

    height: 100,
    borderRadius: 50,
    maxWidth:"100%",
      // margin:" auto",
    // backgroundColor: '#e0e0e0', // Optional background color
    // justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%', // Makes the image width 100% of the container's width
    height: 'auto',
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    textAlign:"left",
    fontWeight: 'bold',
    marginTop:0,
    color:"#109ACD",
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign:"left",

    marginTop:40,
    fontWeight: 'bold',

    color:"#109ACD",
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  featureButton: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 5,
    width:"25%",
  borderWidth:1,
  borderColor:"#109ACD",
    borderRadius: 5,
  },
  featureText: {
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#109ACD',
    padding: 5,
    borderRadius: 50,
    marginTop: 10,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#109ACD',
    marginTop: 20,
  },
});

export default Homescreen;
