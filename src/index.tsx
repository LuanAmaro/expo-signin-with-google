import React, { useCallback, useState } from 'react';
import { Alert, View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Google from 'expo-google-app-auth';
import { config } from './config/GoogleConfig'
import { UserData } from './@types/User'

import * as Styled from './styles';

const MyApp: React.FC = () => {
  const [user, setUser] = useState<UserData>({} as UserData)

  const handleSigInGoogle = useCallback(async() => {
    try {
      const { type, accessToken, user  } = await Google.logInAsync(config);

      if(type !== 'success') {
        return Alert.alert('Atenção', 'Houve um problema para realizar login com Google, tenta novamente!')
      }

      setUser({
        user
      })

      await AsyncStorage.setItem('@AccessToken', accessToken)
    } catch (error) {
      console.log('Error: ', error)
    }

  }, [])

  const handleSigOutGoogle = useCallback(async () => {
    const accessToken = await AsyncStorage.getItem('@AccessToken')
    const token = accessToken || '' as string
    try {
      await Google.logOutAsync({ accessToken: token,  ...config });
      setUser({} as UserData)
      AsyncStorage.removeItem('@AccessToken');
    } catch (error) {
      console.log('error: ', error)
    }
  }, [])


  const isAuthenticate = user.user ? true : false

  const renderUser = () => {
    return (
      <>
        <Styled.ContainerUser>
          <Styled.WelcomeUser>Seja bem vindo!</Styled.WelcomeUser>
          <Styled.Username>Olá, {user.user.name}</Styled.Username>
        </Styled.ContainerUser>
      </>
    )
  }

  return (
    <>
    <Styled.Container>
      <Styled.Title>Authenticate with Google</Styled.Title>
      <Styled.Button 
        onPress={() => 
          isAuthenticate ? handleSigOutGoogle() : handleSigInGoogle() 
        }
        color={isAuthenticate}
      >
        <Styled.Text>{isAuthenticate ? 'signOut' : 'signIn'}</Styled.Text>
      </Styled.Button>

      {isAuthenticate ? renderUser() : null}
    </Styled.Container>
    <Styled.ContainerDeveloper>
      <Styled.TextDeveloper>Developer Luan Amaro</Styled.TextDeveloper>
    </Styled.ContainerDeveloper>
    </>
  );
};

export default MyApp;
