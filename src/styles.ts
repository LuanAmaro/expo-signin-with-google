import styled from 'styled-components/native';

type Props = {
  color: boolean
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin-left: 16px;
  margin-right: 16px;
`;

export const Title = styled.Text`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  width: 100%;
  height: 45px;
  background-color: ${(props: Props ) => props.color ?  'red' : '#7132aa'};

  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
`;

// Render User
export const ContainerUser = styled.View`
  width: 100%;
  padding: 10px;
  background-color: #7132aa;
  margin-top: 20px;

  align-items: center;
  border-radius: 8px;
`;


export const WelcomeUser = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

export const Username = styled.Text`
  color: #fff;
  font-size: 16px;
`

// Developer
export const ContainerDeveloper = styled.View`
  min-height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #7132aa;
`;
export const TextDeveloper = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 800;
`;
