import { fetchRoutes, fetchTrips } from '../api';
import { SEL_FROM, SEL_TO, SUCCESS_FROM, SUCCESS_TO, SEL_DATE, MATCH_ROUTES, SUCCESS_TRIPS } from '../constant';

function selFrom(from) {
  return {
    type: SEL_FROM,
    from
  }
}

function selTo(to) {
  return {
    type: SEL_TO,
    to
  }
}

function receiveFrom(data) {
  return {
    type: SUCCESS_FROM,
    routes: data.entities.route
  }
}

function receiveTo(data) {
  return {
    type: SUCCESS_TO,
    routes: data.entities.route
  }
}

function matchRoutes() {
  return {
    type: MATCH_ROUTES,
  }
}

function receiveTrips(trips) {
  return {
    type: SUCCESS_TRIPS,
    trips
  }
}

export function selDate(date) {
  return {
    type: SEL_DATE,
    date
  }
}

export function loadFrom(from) {
  return (dispatch) => {
    dispatch(selFrom(from));
    return fetchRoutes(from).then(data => dispatch(receiveFrom(data)))
  }
}

export function loadTo(to) {
  return (dispatch) => {
    dispatch(selTo(to));
    return fetchRoutes(to).then(data => dispatch(receiveTo(data)))
  }
}

export function findSchedule() {
  return (dispatch, getState) => {
    dispatch(matchRoutes());
    const { matchRouteIds, date } = getState();
    const datetime = Math.floor( (date || Date.now()) / 1000)
    return fetchTrips(matchRouteIds, datetime).then(data => dispatch(receiveTrips(data)));
  }
}