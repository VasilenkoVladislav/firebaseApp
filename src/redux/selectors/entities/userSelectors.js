import { createSelector } from 'reselect';

// selector
const getUserState = (state) => state.entities.user;

// reselect function
export const getUserIsSignInState = createSelector(
    [ getUserState ],
    (user) => user.isSignIn
);

export const getUserIsLoadingState = createSelector(
    [ getUserState ],
    (user) => user.isLoading
);