import {
    SIGN_IN,
    DATA_LOADING
} from './types';
export const signIn = () => (dispatch) => {

    dispatch(dataLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
}

export const dataLoading = () => ({
    type:DATA_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DATA_FAILED,
    payload: errmess
});