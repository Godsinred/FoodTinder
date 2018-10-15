import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '',
  loading: false, signUploading: false, signUpMsg: '' };

  signUserOut() {
    firebase.auth().signOut();
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
  }

  onSignUpButtonPress() {
    const { email, password } = this.state;

    this.setState({ signUpError: '', signUpMsg: '', signUploading: true });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSignUpSuccess.bind(this))
      .catch(this.onSignUpFail.bind(this));
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onSignUpSuccess() {
      this.setState({ signUpMsg: 'Account Created!', signUploading: false });
  }

  onSignUpFail() {
    this.setState({ error: 'Account Creation Failed', signUploading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  renderSignUpButton() {
    if (this.state.signUploading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onSignUpButtonPress.bind(this)}>
        Sign Up
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <Text style={styles.signUpMsg}>
          {this.state.signUpMsg}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <CardSection>
          {this.renderSignUpButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  signUpMsg: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'green'
  }
};

export default LoginForm;
