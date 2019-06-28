import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Platform } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

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

class SignInUp extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    newAccount: false,
    username: '',
    email: '',
    password: '',
    typeUser: 'client',
  };

  handleSubmit = () => {
    const {
      newAccount, username, email, password, typeUser,
    } = this.state;
    const { signInRequest, signUpRequest } = this.props;

    if (newAccount) {
      signUpRequest(username, email, password, typeUser);
    } else {
      signInRequest(email, password);
    }
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
                  <LoginButtonText>{newAccount ? 'Já tenho login' : 'Criar conta gratuíta'}</LoginButtonText>
                </LoginButton>
              </ContentButton>
            </Content>
          </Container>
        </ContentBackground>
      </Background>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignInUp);
