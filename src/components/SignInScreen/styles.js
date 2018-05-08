import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width,
        height,
    },
    loginWrap: {
        height: 400
    },
    loginTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginTitleBlock: {
        flexDirection: 'row'
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        color: 'white',
        padding: 0
    },
    errorInput: {
        position: 'absolute',
        margin: 0,
        top: 40
    },
    leftIconInputContainer: {
        marginLeft: 0
    },
    inputContainerEmail: {
        width: width - 70,
    },
    inputContainerPassword: {
        marginTop: 25,
        width: width - 70,
    },
    loginButtonContainer: {
        marginTop: 35,
        width: width - 70,
    },
    loginButton: {
        backgroundColor: '#28a745',
        borderRadius: 5,
        height: 40,
    }
});