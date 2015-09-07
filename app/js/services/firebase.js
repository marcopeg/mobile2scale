
import Firebase from 'firebase';

var _FB;

export function initFirebase(instance) {
    _FB = instance;
    return _FB;
}

export function getRef(path) {
    return _FB;
}
