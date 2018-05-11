import firebase from 'react-native-firebase';
import { updatePosition } from '../redux/actions/entities/positionActions';

class FirebaseService {

    initialize({dispatch}) {
        this.dispatch = dispatch;
    }

    subscribeDb () {
        this.db = firebase.app();
        this.rootRef = this.db.database().ref();
        this.positionRef = this.rootRef.child('Position');
        this.positionRef.on('value', (childSnapshot) => {
            const result = Object.keys(childSnapshot._value).map((key) => {
                return {
                    name: key,
                    coords: childSnapshot._value[key]
                }
            });
            this.dispatch(updatePosition(result));
        })
    }

    unsubscribeDb () {
        if (this.positionRef) {
            this.positionRef.off();
        }
    }

    signIn = ({email, password}) => {
        this.subscribeDb();
        return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);
    };

    signOut = () => {
        this.unsubscribeDb();
        return firebase.auth().signOut();
    };

    updatePosition = (userName, position) => {
        this.positionRef.child(userName).update(position);
    };

    onAuthStateChanged = (successCallback, errorCallback) => {
        return firebase.auth().onAuthStateChanged(
            (user) => {
                successCallback(user);
                this.subscribeDb();
            },
            (error) => {
                errorCallback(error);
                this.unsubscribeDb();
            });
    };

    get currentUser () {
        return firebase.auth().currentUser;
    }
}


export const firebaseService = new FirebaseService();