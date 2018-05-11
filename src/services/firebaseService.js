import firebase from 'react-native-firebase';
import { updatePosition } from '../redux/actions/entities/positionActions';

class FirebaseService {

    initialize({dispatch}) {
        this.dispatch = dispatch;
    }

    subscribeDb () {
        this.db = firebase.app();
        this.rootRef = this.db.database().ref();
        this.positionRef = this.rootRef.child('position');
        this.positionRef.on('value', (childSnapshot) => {
            const result = Object.keys(childSnapshot._value).map((key) => childSnapshot._value[key]);
            this.dispatch(updatePosition(result));
        })
    }

    unsubscribeDb () {
        if (this.positionRef) {
            this.positionRef.off();
        }
    }

    signIn = async ({email, password}) => {
        const { user } =  await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);
        if (user) {
            this.subscribeDb();
        }
        return { user };
    };

    signOut = async () => {
        this.unsubscribeDb();
        return await firebase.auth().signOut();
    };

    updatePosition = (uid, coords) => {
        this.positionRef.child(uid).update({coords});
    };

    onAuthStateChanged = (successCallback, errorCallback) => {
        return firebase.auth().onAuthStateChanged(
            (user) => {
                if (user) {
                    successCallback(user);
                    this.subscribeDb();
                } else {
                    errorCallback('Not found current user!');
                    this.unsubscribeDb();
                }
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