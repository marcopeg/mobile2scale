
import {
    SET_PENDING_TICKETS,
    ADD_CONSUMED_TICKET
} from './consumer-actions';

var initialState = {
    pendingTickets: 0,
    consumedTickets: []
};

export default function consumerReducer(state = initialState, action) {
    switch (action.type) {
        
        case SET_PENDING_TICKETS:
            return {...state, pendingTickets: action.value};

        case ADD_CONSUMED_TICKET:
            return {...state, consumedTickets: [...state.consumedTickets, action.ticketId]};
    }
    return state;
}
