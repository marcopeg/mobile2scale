
import Firebase from 'firebase';

var _FB;

export function initFirebase(instance) {
    _FB = instance;
}

export function getRef(path) {
    return _FB;
}
