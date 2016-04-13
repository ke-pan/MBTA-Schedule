//import fetch from 'isomorphic-fetch';

export const REQUEST = 'REQUEST';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';

function receive(data) {
  return {
    type: SUCCESS,
    data
  }
}

function request(from, to, day) {
  return {
    type: REQUEST,
    from,
    to,
    day,
  }
}

function failure() {
  return {
    type: FAILURE
  }
}

function fetchFare(from, to, day) {
  return new Promise(function(resolve, reject) {
    resolve(
      [{
        tripId: '01SFO10SUN',
        fromStopId: 'LAFY',
        fromDepartureTime: '08:00:00',
        toStopId: 'ROCK',
        toArrivalTime: '08:11:00'
      }]
    )
  })
}

export function loadFare(from, to, day) {
  return (dispatch) => {
    dispatch(request(from, to, day));
    return fetchFare(from, to, day)
      .then(data => dispatch(receive(data)))
  }
}