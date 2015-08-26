export const SET_CLIENT_ID = '@@client@setId';
export const UNSET_CLIENT_ID = '@@client@unsetId';
export const TICKET_WAS_ADDED = '@@client@ticketWasAdded';
export const SET_PENDING_TICKETS = '@@client@setPendingTickets';

export function setClientId(clientId) {
    return {
        type: SET_CLIENT_ID,
        clientId
    };   
}

export function unsetClientId() {
    return {
        type: UNSET_CLIENT_ID
    };   
}

export function ticketWasAdded() {
    return {
        type: TICKET_WAS_ADDED
    };
}

export function setPendingTickets(value) {
    return {
        type: SET_PENDING_TICKETS,
        value
    };   
}
