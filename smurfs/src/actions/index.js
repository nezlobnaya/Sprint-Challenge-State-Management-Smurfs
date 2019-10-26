import axios from 'axios'

export const GET_SMURF_DATA_START = 'GET_SMURF_DATA_START'
export const GET_SMURF_DATA_SUCCESS = 'GET_SMURF_DATA_SUCCESS'
export const GET_SMURF_DATA_FAILURE = 'GET_SMURF_DATA_FAILURE'
export const POST_SMURF_DATA_START = 'POST_SMURF_DATA_START'
export const POST_SMURF_DATA_SUCCESS = 'POST_SMURF_DATA_SUCCESS'
export const POST_SMURF_DATA_FAILURE = 'POST_SMURF_DATA_FAILURE'


export function fetchData() {
    return dispatch => {
        dispatch({ type: GET_SMURF_DATA_START })
        axios.get('http://localhost:3333/smurfs')
             .then(res => {
                 console.log('RES', res)
                 dispatch({ type: GET_SMURF_DATA_SUCCESS, payload: res.data })
             })
             .catch(err => {
                 dispatch({ type: GET_SMURF_DATA_FAILURE, payload: err.response })
             })
             
    }
}
const url = 'http://localhost:3333/smurfs'
export function postData(smurf) {
    return dispatch => {
        dispatch({ type: POST_SMURF_DATA_START, payload: smurf })
        axios.post(url, smurf)
        .then(res => {
            console.log('RES POST', res)
            dispatch({ type: POST_SMURF_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: POST_SMURF_DATA_FAILURE, payload: err.response })
        })
    }
}




