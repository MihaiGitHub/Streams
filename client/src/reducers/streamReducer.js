import _ from 'lodash';
import {
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_STREAM:
            // Create a new object with current state object and add a new key/value pair on the fly
            // Add a new key of the streams id and the stream value itself
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            // Identical to fetch stream
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            // In all 3 cases identical
            // Get back a single record from API
            // Take that record and add it to the front end state object
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            // In this case the payload is the stream id itself so don't have to reference the id property
            // omit creates a new object without the item omitted, does not change the original one
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            // mapKeys is a function that takes an array and returns an object
            // The keys of the new object returned are taken from each individual record from inside the array
            // The second argument tells mapKeys to use as key for the id of each record for the new object
            // Take list of streams that came back from API, create a new object using the id of the individual
            // streams themselves, take new object that comes from mapKeys and add it to the big overall object
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}