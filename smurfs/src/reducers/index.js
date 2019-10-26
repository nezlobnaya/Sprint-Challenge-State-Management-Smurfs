import { GET_SMURF_DATA_START, GET_SMURF_DATA_SUCCESS, GET_SMURF_DATA_FAILURE, POST_SMURF_DATA_START, 
    POST_SMURF_DATA_SUCCESS, POST_SMURF_DATA_FAILURE, REMOVE_SMURF_DATA_START, REMOVE_SMURF_DATA_SUCCESS, REMOVE_SMURF_DATA_FAILURE } from '../actions'
    
    const initialState = {
        smurfs: [],
        isLoading: false,
        isPosting: false,
        error: null,
        id: ''
    }
    
    export const reducer = (state = initialState, action) => {
        switch(action.type) {
            case GET_SMURF_DATA_START:
                return {
                    ...state,
                    isLoading: true,
                }
            case GET_SMURF_DATA_SUCCESS:
                return {
                    ...state,
                    smurfs: action.payload,
                    isLoading: false,
                }
            case GET_SMURF_DATA_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
            case POST_SMURF_DATA_START:
                return {
                    ...state,
                    isPosting: true,
                }
            case POST_SMURF_DATA_SUCCESS:
                return {
                    ...state,
                    smurfs: action.payload,
                    isPosting: false
                }
            case POST_SMURF_DATA_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    isPosting: false
                }
            case REMOVE_SMURF_DATA_START:
                return{
                    ...state
                }
            case REMOVE_SMURF_DATA_SUCCESS:
                return {
                    ...state,
                    smurfs: action.payload
                }
            case REMOVE_SMURF_DATA_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }
            default:
                return state
        }
    }