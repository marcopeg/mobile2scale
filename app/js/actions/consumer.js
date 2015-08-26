
export const SET_PENDING_TICKETS = '@@consumer@setPendingTickets';
export const ADD_CONSUMED_TICKET = '@@consumer@addConsumedTicket';

export function setPendingTickets(value) {
    return {
        type: SET_PENDING_TICKETS,
        value
    };   
}

export function addConsumedTicket(ticketId) {
    return {
        type: ADD_CONSUMED_TICKET,
        ticketId
    };   
}
