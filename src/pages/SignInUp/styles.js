import styled from 'styled-components/native';
import { general } from '~/styles';

export const Background = styled.ImageBackground.attrs({
  imageStyle: { resizeMode: 'stretch' },
})`
  background: #000000;
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
`;

export const Content = styled.View``;

export const ContentLogo = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
  height: 72px;
  width: 72px;
`;

export const InputName = styled(general.Input)``;

export const InputEmail = styled(general.Input)``;

export const InputPassword = styled(general.Input)``;

export const SignInButton = styled(general.Button)``;

export const SignInButtonText = styled(general.ButtonText)``;

export const LoginButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
`;

export const ContentButton = styled.View`
  margin-top: 20px;
  align-items: center;
`;
