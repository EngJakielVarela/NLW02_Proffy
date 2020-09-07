import React, { useRef, useCallback, useState } from 'react';
import { View, KeyboardAvoidingView, Image, Text, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import CustomizedInput from '../../components/CustomizedInput';

import backIcon from '../../assets/images/icons/Voltar.png';

import styles from './styles';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const swiper = useRef<Swiper>(null);
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = useCallback(() => {
    if (swiper.current) {
      swiper.current.scrollBy(1);
    }
  }, [swiper, swiper.current]);

  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [navigation]);

  const handleSignUp = useCallback(() => {
    navigation.navigate('SignUpSuccess')
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity 
        onPress={handleGoBack}
        style={[styles.header, {marginTop: 50}]}
      >
        <Image style={{}} source={backIcon} />
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.pageIntro}>
          <Text style={styles.introTitle}>
            Crie sua {'\n'}
            conta gratuíta
          </Text>
          <Text style={styles.introDescription}>
            Basta preencher esses dados {'\n'}
            e você estará conosco.
          </Text>
        </View>


        <Swiper
          ref={swiper}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          paginationStyle={styles.pagination}
          loop={false}
          style={styles.wrapper}
        >
          <View style={styles.slide}>
            <View style={styles.form}>
              <Text style={styles.formTitle}>
                01. Quem é você?
              </Text>

              <View style={styles.inputsContainer}>
                <CustomizedInput
                  first
                  last
                  placeholder="Nome"
                  value={name}
                  onChangeText={text => setName(text)}
                />
              </View>
            </View>

            <Button
              enabled
              onPress={handleNext}
              style={{ backgroundColor: '#8257E5', }}
            >
              Proxímo
            </Button>
          </View>

          <View style={[styles.slide, {marginTop: 60}]}>
            <View style={styles.form}>
              <Text style={styles.formTitle}>
                02. E-mail e Senha
              </Text>

              <View style={styles.inputsContainer}>
                <CustomizedInput
                  first
                  placeholder="E-mail"
                  value={email}
                  onChangeText={text => setEmail(text)}
                />

                <CustomizedInput
                  last
                  isPassword
                  placeholder="Senha"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
            </View>

            <Button
              enabled
              onPress={handleSignUp}
            >
              Concluir cadastro
            </Button>
          </View>
        </Swiper>

      </KeyboardAvoidingView>

    </View>
  );
}

export default SignUp;