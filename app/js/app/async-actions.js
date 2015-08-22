
import { ticketWasAdded } from './actions';

export function addTicket() {
    return dispatch => {
        console.log('ASync Action > firebase something');
        dispatch(ticketWasAdded());
    };
}
