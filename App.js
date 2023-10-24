import React, { useState } from 'react';
import { View, Text, Image, Pressable, Alert, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  // const navigation = useNavigation();
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleAcceptTerms = () => {
    if(!termsAccepted){
      Alert.alert('Termos de uso', 'Você deve aceitar os termos antes de avançar.', [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelar'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK')},
      ]);
    }else{
      navigation.navigate('CEPPage');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('./assets/images/alarmed.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.containerTitleSubTitle}>
        <Text style={styles.title}>Seja bem-vindo!</Text>
        <Text style={styles.subtitle}>
          Somos seu novo jeito de controlar seus medicamentos
        </Text>
      </View>
      <View style={styles.containerMainContent}>
        <View style={styles.containerMainContentChild}>
          <Image
            source={require('./assets/images/welcomePage/calendar.png')}
            style={styles.imgWelcomePage}
          />
          <Text style={styles.description}>
            Defina seus horários
          </Text>
        </View>
        <View style={styles.containerMainContentChild}>
          <Image
            source={require('./assets/images/welcomePage/camera.png')}
            style={styles.imgWelcomePage}
          />
          <Text style={styles.description}>
          tire uma foto do medicamento
          </Text>
        </View>
        <View style={styles.containerMainContentChild}>
          <Text style={styles.subtitleMainContent}>
          e pronto! O resto é com a gente...
          </Text>
        </View>
      </View>
      <View style={styles.termsAndButton}>
        <View style={styles.terms}>
          <CheckBox
            checked={termsAccepted}
            onPress={() => setTermsAccepted(!termsAccepted)}
          />
          <Text style={styles.termsText}>
            Aceito os <Text style={styles.termsTextHilighted}>termos de uso</Text>
          </Text>
        </View>
        <Pressable style={styles.button} onPress={handleAcceptTerms}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: '360px',
    minHeight: '640px',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 189,
    height: 48,
    margin: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#0085FF',
    marginBottom: 10,
  },
  subtitleMainContent: {
    fontSize: 16,
    color: '#0085FF',
    fontWeight: 'bolder',
    margin: 20,
  },
  description: {
    fontSize: 14,
    margin: 10,
  },
  terms:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    fontSize: 14,
    margin: '.7rem',
  },
  termsTextHilighted:{
    fontSize: 16,
    color: '#0085FF',
    fontWeight: 'bolder',
  },
  imgWelcomePage: {
    width: 25,
    height: 25,
  },
  containerLogo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  containerTitleSubTitle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMainContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  containerMainContentChild:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: '#0085FF',
    borderRadius: 10,
  },
  buttonText:{
    color: '#ffffff',
    fontSize: 16,
  }
});

export default WelcomeScreen;