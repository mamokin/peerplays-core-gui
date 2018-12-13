import * as Types from '../constants/ActionTypes';

/**
 * Action Creator (SET_POSITION)
 * Show|Hide Unlock modal
 * TODO::rm
 * @param status
 * @returns {function(*, *)}
 */
export function setWalletPosition(status) {
    return (dispatch, getState) => {
        dispatch({
            type: Types.SET_POSITION,
            payload: status
        });
        return getState().wallet.locked;
    }
}
/**
 * Action creator (SET_LOCK_STATUS)
 * Wallet is closed or not
 * @param status
 * @returns {function(*)}
 */
export function setWalletStatus(status) {
    return dispatch => {
        return dispatch({
            type: Types.SET_LOCK_STATUS,
            payload: status
        });
    }
}