
import { getRef } from './firebase-service';

import { setPendingTickets } from './consumer-actions';

var __timer;

export function startConsumer() {
    return dispatch => {
        console.log('start consumer');

        getRef().child('tickets').on('value', snap => {
            var data = snap.val();
            var length = data ? Object.keys(data).length : 0;
            dispatch(setPendingTickets(length));
        });

        __timer = setInterval(consume, 5000);

    }
}

export function stopConsumer() {
    return dispatch => {
        clearInterval(__timer);
    }
} 

export function consume() {
    return new Promise((resolve, reject) => {
        getRef().child('tickets').once('child_added', snap => {
            console.log('consume');
            var ticketId = snap.key();
            var clientId = snap.val();
            snap.ref().remove();

            getRef().child('clients').child(clientId).child('pending').once('value', snap => {
                snap.ref().set(snap.val() - 1);
                resolve(ticketId);
            });
        });
    });
}

