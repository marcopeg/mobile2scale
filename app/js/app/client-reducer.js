
import { TICKET_WAS_ADDED } from './actions';

var initialState = {
    submittedTickets: 0
};

export default function clientReducer(state = initialState, action) {
    switch (action.type) {
        case TICKET_WAS_ADDED:
            return {...state, submittedTickets: state.submittedTickets + 1};
    }
    return state;
}
