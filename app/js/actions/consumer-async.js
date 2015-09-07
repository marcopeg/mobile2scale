
import { getRef } from 'services/firebase';

import { 
    setPendingTickets,
    addConsumedTicket 
} from 'actions/consumer';

var consumerId, consumer;
var timers = [];
var loopTimeout;

export function registerConsumer() {
    return dispatch => {
        console.log('start consumer');

        consumer = getRef().child('consumers').push({
            created: Date.now(),
            updated: Date.now(),
            done: 0
        });

        consumerId = consumer.key();

        // ping for keep it alive
        timers.push(setInterval($=> {
            consumer.child('updated').set(Date.now());
        }, 1000));

        // update pending tickets
        getRef().child('tickets').on('value', snap => {
            var data = snap.val();
            var length = data ? Object.keys(data).length : 0;
            dispatch(setPendingTickets(length));
        });

        // start consumer loop
        startLoop(dispatch, 2000);
    }
}

export function unregisterConsumer() {
    return dispatch => {
        consumerId = null;
        consumer = null;
        timers.forEach(t => clearInterval(t));
        clearTimeout(loopTimeout);
    }
}

function startLoop(dispatch, interval) {
    function loop() {
        consume().then(ticketId => {
            dispatch(addConsumedTicket(ticketId));
            if (consumerId) {
                loopTimeout = setTimeout(loop, interval);
            }
        });
    }
    loop();
}

function consume() {
    return new Promise((resolve, reject) => {
        getRef().child('tickets').once('child_added', snap => {
            
            // get ticket data and remove the pending ticket
            snap.ref().remove();
            var ticketId = snap.key();
            var clientId = snap.val();
            
            console.log('consume', ticketId);

            // compute client's pending tickets
            getRef().child('tickets').orderByValue().equalTo(clientId).once('value', snap => {
                var pendingTickets = Object.keys((snap.val() || {})).length;
                getRef().child('clients').child(clientId).child('pending').set(pendingTickets, err => {
                    if (err) {
                        console.error('Failed ticket', ticketId, err);
                        reject(err, ticketId);
                    } else {
                        resolve(ticketId);
                    }
                });
            });
        });
    });
}

