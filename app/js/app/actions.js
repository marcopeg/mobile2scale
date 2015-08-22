
import { LOCATION_DID_CHANGE } from 'redux-react-router/lib/actionTypes';

export const TICKET_WAS_ADDED = '@@client@ticketWasAdded';

export function changePage(uri) {
    return {
        type: LOCATION_DID_CHANGE,
        payload: {
            pathname: '/' + uri
        }
    };
}

export function ticketWasAdded() {
    return {
        type: TICKET_WAS_ADDED
    };
}
