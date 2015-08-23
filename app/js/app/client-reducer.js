
import {
    SET_CLIENT_ID,
    UNSET_CLIENT_ID,
    TICKET_WAS_ADDED,
    SET_PENDING_TICKETS
} from './client-actions';

var initialState = {
    clientId: null,
    submittedTickets: 0,
    pendingTickets: 0
};

export default function clientReducer(state = initialState, action) {
    switch (action.type) {
        
        case SET_CLIENT_ID:
            return {...state, clientId: action.clientId};

        case UNSET_CLIENT_ID:
            return {...state, clientId: null};

        case TICKET_WAS_ADDED:
            return {...state, submittedTickets: state.submittedTickets + 1};

        case SET_PENDING_TICKETS:
            return {...state, pendingTickets: action.value};
    }
    return state;
}
