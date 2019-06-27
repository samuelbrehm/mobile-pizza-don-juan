import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Platform } from 'react-native';

import {
  Background,
  ContentBackground,
  Container,
  Content,
  ContentLogo,
  Logo,
  InputName,
  InputEmail,
  InputPassword,
  SignInButton,
  SignInButtonText,
  LoginButton,
  LoginButtonText,
  ContentButton,
} from './styles';

import logo from '~/assets/images/logo.png';
import fundo from '~/assets/images/fundo-mobile.jpeg';

export default class SignInUp extends Component {
  static propTypes = {};

  state = {
    newAccount: false,
    username: '',
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    // const { signInRequest } = this.props;

    // signInRequest(email, password);
  };

  handleAccount = () => {
    const { newAccount } = this.state;
    this.setState({ newAccount: !newAccount });
  };

  render() {
    const {
      newAccount, username, email, password,
    } = this.state;

    return (
      <Background source={fundo}>
        <ContentBackground>
          <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <Content>
              <ContentLogo>
                <Logo source={logo} />
              </ContentLogo>

              {newAccount ? (
                <InputName
                  placeholder="Nome completo"
                  value={username}
                  onChangeText={text => this.setState({ username: text })}
                  keyboardType="default"
                  autoCapitalize="words"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  autoFocus
                  returnKeyType="next"
                  onSubmitEditing={() => this.emailInput.focus()}
                />
              ) : null}

              <InputEmail
                placeholder="Seu e-mail"
                value={email}
                onChangeText={text => this.setState({ email: text })}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="next"
                ref={(el) => {
                  this.emailInput = el;
                }}
                onSubmitEditing={() => this.passwordInput.focus()}
              />

              <InputPassword
                placeholder="Senha secreta"
                value={password}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="send"
                ref={(el) => {
                  this.passwordInput = el;
                }}
                onSubmitEditing={this.handleSubmit}
              />
              <SignInButton onPress={this.handleSubmit}>
                <SignInButtonText>{newAccount ? 'Criar conta' : 'Entrar'}</SignInButtonText>
              </SignInButton>

              <ContentButton>
                <LoginButton onPress={this.handleAccount}>
                  <LoginButtonText>
                    {newAccount ? 'Já tenho login' : 'Criar conta gratuíta'}
                  </LoginButtonText>
                </LoginButton>
              </ContentButton>
            </Content>
          </Container>
        </ContentBackground>
      </Background>
    );
  }
}
