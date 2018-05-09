import { UPDATE_POSITION } from '../../constansActions';

export function updatePosition (position) {
    return { type: UPDATE_POSITION, payload: position }
}