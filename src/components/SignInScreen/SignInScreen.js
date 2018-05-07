import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const propTypes = {
    signIn: PropTypes.func.isRequired
};

class SignInScreen extends PureComponent {
    constructor (props) {
        super(props);
        this.state = { email: '', password: '' };
    }
    handleClickSignIn = () => {
        const { signIn } = this.props;
        signIn('vlad.vasilenko1996@gmail.com', 'aa123456');
    };
    render () {
        return (
            <View style={styles.container}>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
            </View>
        )
    }
}

SignInScreen.propTypes = propTypes;

export default SignInScreen;
