import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import React, { PureComponent } from 'react';
import bgSrc from '../../assets/backgroundImage.jpg';
import { styles } from './styles';
import PropTypes from 'prop-types';

const propTypes = {
    signIn: PropTypes.func.isRequired
};

class SignInScreen extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValid: true,
            passwordValid: true
        };
    }
    handleClickSignIn = () => {
        const { signIn } = this.props;
        const { email, password } = this.state;
        let emailValid = false;
        let passwordValid = false;
        if (email.length !== 0) {
            emailValid = true;
        }
        if (password.length !==0) {
            passwordValid = true;
        }
        this.setState({ emailValid, passwordValid });
        !emailValid && this.emailInput.shake();
        !passwordValid && this.passwordInput.shake();
        if (emailValid && passwordValid) {
            signIn(email, password);
            this.setState({ email: '', password: '' });
        }
    };
    handleOnChangeTextEmail = (email) => {
        this.setState({ email });
    };
    handleOnChangeTextPassword = (password) => {
        this.setState({ password });
    };
    handleOnSubmitEditingEmail = () => {
        this.passwordInput.focus();
    };
    handleOnSubmitEditingPassword = () => {
        this.handleClickSignIn();
    };

    render () {
        const { isLoading } = this.props;
        const { email, password } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#443685"/>
                <ImageBackground style={styles.bgImage} source={bgSrc}>
                    <View style={styles.loginWrap}>
                        <View style={styles.loginTitle}>
                            <View style={styles.loginTitleBlock}>
                                <Text style={styles.text}>Where</Text>
                                <Text style={styles.text}> are</Text>
                            </View>
                            <View style={{marginTop: -10}}>
                                <Text style={styles.text}>You?</Text>
                            </View>
                        </View>
                        <View style={styles.formContainer}>
                            <Input
                                value={email}
                                leftIcon={
                                    <Icon
                                        type='feather'
                                        name='user'
                                        size={17}
                                        color='white'/>
                                }
                                inputContainerStyle={{borderColor: 'white'}}
                                ref={input => this.emailInput = input}
                                inputStyle={styles.input}
                                placeholderTextColor='white'
                                leftIconContainerStyle={styles.leftIconInputContainer}
                                keyboardAppearance='light'
                                autoFocus={false}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='email-address'
                                returnKeyType='next'
                                placeholder='Email address'
                                containerStyle={styles.inputContainerEmail}
                                onSubmitEditing={this.handleOnSubmitEditingEmail}
                                errorStyle={styles.errorInput}
                                onChangeText={this.handleOnChangeTextEmail}
                                errorMessage={!this.state.emailValid ? 'Email can not be blank' : null}/>
                            <Input
                                value={password}
                                leftIcon={
                                    <Icon
                                        type='feather'
                                        name='lock'
                                        size={17}
                                        color='white'/>
                                }
                                inputContainerStyle={{borderColor: 'white'}}
                                ref={input => this.passwordInput = input}
                                inputStyle={styles.input}
                                placeholderTextColor='white'
                                leftIconContainerStyle={styles.leftIconInputContainer}
                                keyboardAppearance='light'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                returnKeyType='done'
                                blurOnSubmit={true}
                                containerStyle={styles.inputContainerPassword}
                                placeholder='Password'
                                errorStyle={styles.errorInput}
                                onSubmitEditing={this.handleOnSubmitEditingPassword}
                                onChangeText={this.handleOnChangeTextPassword}
                                errorMessage={!this.state.passwordValid ? 'Password can not be blank' : null}/>
                            <Button
                                containerStyle={styles.loginButtonContainer}
                                buttonStyle={styles.loginButton}
                                activeOpacity={0.8}
                                title='Sign In'
                                onPress={this.handleClickSignIn}
                                loading={isLoading}
                                disabledStyle={{backgroundColor: '#98cca4'}}
                                disabled={isLoading}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

SignInScreen.propTypes = propTypes;

export default SignInScreen;
