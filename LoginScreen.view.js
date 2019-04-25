import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import renderIf from 'render-if';

const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const passwordValidate = 'prashant123';

const FormInput = ({ value, placeHolder, secureTextEntry = false, onChangeText, autoCapitalize = false }) => (
  <View style={{ padding: 10, width: 140 }}>
    <TextInput
      value={value}
      style={{ height: 40, borderColor: '#262626', borderWidth: 1, paddingLeft: 10 }}
      placeholder={placeHolder}
      placeholderTextColor='gray'
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
    />
  </View>
)

const Warning = ({ title }) => <Text style={{ color: 'red' }}>{title}!!</Text>;

const LoginButton = ({ title }) => (<TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#262626', width: 100, height: 35, alignItems: 'center', justifyContent: 'center' }}>
  <Text style={{ color: 'white' }}>{title}</Text>
</TouchableOpacity>)

const Header = ({ message }) => <Text style={{ color: '#262626', paddingBottom: 30 }}>{message}</Text>

export default class LoginScreen extends Component {

  state = {
    email: '',
    password: '',
  }

  setEmail = (email) => this.setState({
      email,
    });

  validatePassword = (password) => this.setState({
    password,
  });

  render() {
    const { email, password } = this.state;
    const renderIfEmailNotValidated = renderIf(!(emailValidation.test(email) || email === ''));
    const renderIfPasswordNotValidated = renderIf(!(passwordValidate === password || password === ''));
    const renderIfValidationSuccess = renderIf(emailValidation.test(email) && passwordValidate === password);
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            paddingTop: 80,
            alignItems: 'center',
          }}>
          <Header message='Please enter the below details to view the Login Button'/>
          <FormInput
            placeHolder='Email'
            value={email}
            onChangeText={this.setEmail}
          />
          {renderIfEmailNotValidated(<Warning title='Email Not Correct' />)}
          <FormInput
            value={password}
            placeHolder='Password'
            secureTextEntry
            onChangeText={this.validatePassword}
          />
          {renderIfPasswordNotValidated(<Warning title='Password Not Correct' />)}
          {renderIfValidationSuccess(<LoginButton title='Login' />)}
        </View>
      </View>
    )
  }
}