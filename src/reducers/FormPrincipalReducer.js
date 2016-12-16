export default function reducer(state = {
    fetching: false,
    fetched: false,
    error: null,
    GitApi: null
}, action ) {
    switch (action.type) {
        case "FETCH_API": {
            return {...state, fetching: true}
        }
        case "FETCH_API_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_API_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                GitApi: {
                    state: action.payload
                }
            }
        }
        default: {

        }
    }

    return state;
}
