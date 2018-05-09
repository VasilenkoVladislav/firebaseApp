import firebase from 'react-native-firebase';
import { updatePosition } from '../redux/actions/entities/positionActions';

class FirebaseDatabaseService {
    constructor () {
        this.db = firebase.initializeApp({
            apiKey: "AIzaSyAxgx9RxTD5yKyDVkjmMUX0pLcVkNPWaYQ",
            authDomain: "fir-app-b0f38.firebaseio.com",
            databaseURL: "https://fir-app-b0f38.firebaseio.com",
            storageBucket: "fir-app-b0f38.appspot.com"
        });
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
    initialize ({dispatch}) {
        this.dispatch = dispatch;
    }
    updatePosition = (userName, position) => {
        this.positionRef.child(userName).update(position);
    };
}

export const firebaseDatabaseService = new FirebaseDatabaseService();