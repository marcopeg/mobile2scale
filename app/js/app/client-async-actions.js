
import { getRef } from './firebase-service';

import {
    setClientId, 
    unsetClientId, 
    ticketWasAdded,
    setPendingTickets
} from './client-actions';

var client, clientId;

export function registerClient() {
    return dispatch => {
        console.log('fb register client');
        
        client = getRef().child('clients').push({
            created: Date.now(),
            updated: Date.now(),
            pending: 0
        });

        clientId = client.key();

        // keep the client alive
        setInterval($=> {
            client.child('updated').set(Date.now());
        }, 1000);

        // update pending tickets
        client.child('pending').on('value', snap => {
            dispatch(setPendingTickets(snap.val()));
        });

        dispatch(setClientId(clientId));
    };
}

export function unregisterClient() {
    return dispatch => {
        console.log('fb remove client');
        dispatch(unsetClientId());
    };
}

export function addTicket(clientId) {
    return dispatch => {
        console.log('ASync Action > firebase something >', clientId );
        dispatch(ticketWasAdded());
        getRef().child('tickets').push(clientId);
        getRef().child('clients').child(clientId).child('pending').once('value', function(snap) {
            snap.ref().set(snap.val() + 1);
            
        });
    };
}
